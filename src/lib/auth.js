import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('tiles-house');

const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    },
    database: mongodbAdapter(db, {
        client
    }),
    socialProviders: {
        google: {
            prompt: "select_account", 
            clientId: googleId, 
            clientSecret: googleSecret,  
        }, 
    },
});