import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/ProductPage';
import { sellAppAPI } from '@/lib/sellapp';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    // Get all products to find the one with matching slug
    const groupsResult = await sellAppAPI.getGroupsWithProducts();
    let product = null;

    // Search through all groups to find the product
    for (const group of groupsResult.data) {
      if (group.products) {
        product = group.products.find((p: any) => p.slug === params.slug);
        if (product) break;
      }
    }

    if (!product) {
      return {
        title: 'Product Not Found | Zyn Shop',
        description: 'The requested product could not be found.',
      };
    }

    // Clean description for meta
    const cleanDescription = product.description
      ? product.description.replace(/<[^>]*>/g, '').substring(0, 160)
      : 'High-quality Discord tools and Nitro services from Zyn Shop';

    return {
      title: `${product.title} | Zyn Shop`,
      description: cleanDescription,
      openGraph: {
        title: product.title,
        description: cleanDescription,
        type: 'product',
        images: product.images?.length > 0 ? [
          {
            url: `https://sell.app/storage/${product.images[0].path}`,
            width: 1200,
            height: 630,
            alt: product.title,
          }
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: product.title,
        description: cleanDescription,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product | Zyn Shop',
      description: 'High-quality Discord tools and Nitro services from Zyn Shop',
    };
  }
}

export default async function ProductPageRoute({ params }: ProductPageProps) {
  try {
    // Get all products to find the one with matching slug
    const groupsResult = await sellAppAPI.getGroupsWithProducts();
    let product = null;
    let groupInfo = null;

    // Search through all groups to find the product
    for (const group of groupsResult.data) {
      if (group.products) {
        product = group.products.find((p: any) => p.slug === params.slug);
        if (product) {
          groupInfo = group;
          break;
        }
      }
    }

    if (!product) {
      notFound();
    }

    // Get detailed product information
    const productResult = await sellAppAPI.getProduct(product.id.toString());
    const detailedProduct = productResult.data;

    return (
      <ProductPage 
        product={detailedProduct} 
        group={groupInfo}
        relatedProducts={groupInfo?.products?.filter((p: any) => p.id !== product.id) || []}
      />
    );
  } catch (error) {
    console.error('Error loading product page:', error);
    notFound();
  }
}

// Generate static paths for better performance
export async function generateStaticParams() {
  try {
    const groupsResult = await sellAppAPI.getGroupsWithProducts();
    const slugs: string[] = [];

    // Collect all product slugs
    for (const group of groupsResult.data) {
      if (group.products) {
        for (const product of group.products) {
          if (product.slug) {
            slugs.push(product.slug);
          }
        }
      }
    }

    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}