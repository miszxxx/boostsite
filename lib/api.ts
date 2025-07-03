// API utility functions for client-side usage
export const api = {
  // Fetch all product groups
  async getGroups(timestamp?: string) {
    const url = timestamp 
      ? `/api/products?timestamp=${timestamp}`
      : '/api/products';
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch groups');
    }
    return response.json();
  },

  // Fetch specific group
  async getGroup(groupId: string) {
    const response = await fetch(`/api/groups/${groupId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch group');
    }
    return response.json();
  },

  // Fetch products in a group
  async getGroupProducts(groupId: string, limit = 15, page = 1) {
    const response = await fetch(
      `/api/groups/${groupId}/products?limit=${limit}&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch group products');
    }
    return response.json();
  },

  // Fetch specific product
  async getProduct(productId: string) {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },
};

// Server-side utility for direct API calls (for SSR/SSG)
export const serverApi = {
  async getGroups(timestamp?: string) {
    const url = timestamp 
      ? `https://sell.app/api/v2/groups?timestamp=${timestamp}`
      : 'https://sell.app/api/v2/groups';
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SELLAPP_API_KEY}`,
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch groups');
    }
    return response.json();
  },

  async getGroup(groupId: string) {
    const response = await fetch(`https://sell.app/api/v2/groups/${groupId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SELLAPP_API_KEY}`,
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch group');
    }
    return response.json();
  },
};