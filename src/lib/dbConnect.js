import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName) {
  const client = new MongoClient(process.env.MONGO_DB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db("Practice_DB").collection(collectionName);
}
