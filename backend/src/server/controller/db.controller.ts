require('dotenv').config();
import * as mongo from 'mongodb';

export const collections: { cves?: mongo.Collection } = {};

export async function databaseConnection() {
    const mongoURI = process.env.MONGODB_CALENDAR;

    if (!mongoURI) {
        throw new Error('MongoDB URI is not provided in environment variables.');
    }

    const client: mongo.MongoClient = new mongo.MongoClient(mongoURI);

    try {
        await client.connect();
        const db: mongo.Db = client.db("CVE");

        const cveCollection: mongo.Collection = db.collection('cves');
        collections.cves = cveCollection;

        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}
