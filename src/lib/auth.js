import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('tiles-house');

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    },
    database: mongodbAdapter(db, {
        client
    }),
    user: {
        additionalFields: {
            image_url: {
                type: "string",
                required: false,
            },
        },
    },
});