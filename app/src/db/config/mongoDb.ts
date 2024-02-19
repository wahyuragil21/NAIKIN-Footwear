import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.NEXT_PUBLIC_DATABASE_URL as string


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("NAIKIN");
export function getCollection(collectionName : string) {
    return db.collection(collectionName)
}