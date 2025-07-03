import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Database helper functions
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db('zynshop');
}

// Cache management functions
export async function getCachedData(collection: string, key: string) {
  try {
    const db = await getDatabase();
    const cacheCollection = db.collection(collection);
    
    const cached = await cacheCollection.findOne({ key });
    
    if (!cached) return null;
    
    // Check if cache is expired (24 hours)
    const expiryTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const isExpired = Date.now() - cached.timestamp > expiryTime;
    
    if (isExpired) {
      // Remove expired cache
      await cacheCollection.deleteOne({ key });
      return null;
    }
    
    return cached.data;
  } catch (error) {
    console.error('Error getting cached data:', error);
    return null;
  }
}

export async function setCachedData(collection: string, key: string, data: any) {
  try {
    const db = await getDatabase();
    const cacheCollection = db.collection(collection);
    
    await cacheCollection.replaceOne(
      { key },
      {
        key,
        data,
        timestamp: Date.now(),
        updatedAt: new Date(),
      },
      { upsert: true }
    );
    
    return true;
  } catch (error) {
    console.error('Error setting cached data:', error);
    return false;
  }
}

export async function clearExpiredCache() {
  try {
    const db = await getDatabase();
    const collections = ['groups', 'products', 'group_products'];
    
    const expiryTime = 24 * 60 * 60 * 1000; // 24 hours
    const cutoffTime = Date.now() - expiryTime;
    
    for (const collectionName of collections) {
      const collection = db.collection(collectionName);
      await collection.deleteMany({
        timestamp: { $lt: cutoffTime }
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error clearing expired cache:', error);
    return false;
  }
}