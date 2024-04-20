import { MongoClient } from 'mongodb';

// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  // Connect to the database
  await client.connect();
  return client.db('Dhrumil_Portfolio'); // Make sure to replace with your database name
}

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('portfolio_work_data');

      // Find all documents in the collection
      const data = await collection.find({}).toArray();

      // Return the data
      res.status(200).json(data);
    } catch (e) {
      console.error(e); // It's a good practice to log the actual error
      // Return an error response
      res.status(500).json({ error: 'Failed to connect to the database' });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
