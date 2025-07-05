import { getCachedData, setCachedData } from './mongodb';

const SELLAPP_BASE_URL = 'https://sell.app/api/v2';

interface SellAppResponse<T> {
  data: T;
  success: boolean;
  cached?: boolean;
}

class SellAppAPI {
  private apiKey: string;

  constructor() {
    if (!process.env.SELLAPP_API_KEY) {
      throw new Error('SELLAPP_API_KEY is required');
    }
    this.apiKey = process.env.SELLAPP_API_KEY;
  }

  private async makeRequest<T>(endpoint: string, cacheKey?: string): Promise<SellAppResponse<T>> {
    try {
      // Try to get cached data first
      if (cacheKey) {
        const cachedData = await getCachedData('sellapp_cache', cacheKey);
        if (cachedData) {
          return {
            data: cachedData,
            success: true,
            cached: true,
          };
        }
      }

      // Make API request
      const response = await fetch(`${SELLAPP_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        // If API fails, try to return stale cache data
        if (cacheKey) {
          const staleData = await getCachedData('sellapp_stale', cacheKey);
          if (staleData) {
            console.warn(`API failed, returning stale data for ${cacheKey}`);
            return {
              data: staleData,
              success: true,
              cached: true,
            };
          }
        }
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();

      // Cache the successful response
      if (cacheKey) {
        await setCachedData('sellapp_cache', cacheKey, data);
        // Also save as stale backup
        await setCachedData('sellapp_stale', cacheKey, data);
      }

      return {
        data,
        success: true,
        cached: false,
      };
    } catch (error) {
      console.error(`SellApp API Error for ${endpoint}:`, error);
      
      // Try to return stale cache as last resort
      if (cacheKey) {
        const staleData = await getCachedData('sellapp_stale', cacheKey);
        if (staleData) {
          console.warn(`Returning stale data for ${cacheKey} due to error`);
          return {
            data: staleData,
            success: false,
            cached: true,
          };
        }
      }
      
      throw error;
    }
  }

  async getGroups(timestamp?: string) {
    const cacheKey = `groups_${timestamp || 'latest'}`;
    const endpoint = timestamp ? `/groups?timestamp=${timestamp}` : '/groups';
    return this.makeRequest(endpoint, cacheKey);
  }

  async getGroup(groupId: string) {
    const cacheKey = `group_${groupId}`;
    return this.makeRequest(`/groups/${groupId}`, cacheKey);
  }

  async getGroupProducts(groupId: string, limit = 15, page = 1) {
    const cacheKey = `group_products_${groupId}_${limit}_${page}`;
    return this.makeRequest(`/groups/${groupId}/products?limit=${limit}&page=${page}`, cacheKey);
  }

  async getProduct(productId: string) {
    const cacheKey = `product_${productId}`;
    return this.makeRequest(`/products/${productId}`, cacheKey);
  }

  async getAllProducts() {
    const cacheKey = 'all_products';
    return this.makeRequest('/products', cacheKey);
  }

  // Enhanced method to get groups with products and proper pricing
  async getGroupsWithProducts() {
    try {
      const groupsResult = await this.getGroups();
      const groups = Array.isArray(groupsResult.data) ? groupsResult.data : [];

      // Fetch products for each group
      const groupsWithProducts = await Promise.all(
        groups.map(async (group: any) => {
          try {
            const productsResult = await this.getGroupProducts(group.id.toString());
            const productsData = productsResult.data;
            
            // Handle different response structures
            let products = [];
            if (Array.isArray(productsData)) {
              products = productsData;
            } else if (productsData && Array.isArray(productsData.data)) {
              products = productsData.data;
            } else if (productsData && productsData.data) {
              products = [productsData.data];
            }

            return {
              ...group,
              products: products,
            };
          } catch (error) {
            console.error(`Error fetching products for group ${group.id}:`, error);
            return {
              ...group,
              products: [],
            };
          }
        })
      );

      return {
        data: groupsWithProducts,
        success: true,
        cached: groupsResult.cached,
      };
    } catch (error) {
      console.error('Error in getGroupsWithProducts:', error);
      
      // Return empty array as fallback
      return {
        data: [],
        success: false,
        cached: false,
      };
    }
  }
}

export const sellAppAPI = new SellAppAPI();