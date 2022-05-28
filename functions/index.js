import express from "express"; //api framework
import cors from "cors";
import functions from "firebase-functions";
import { addAffirmations, getAllAffirmations } from "./affirmations.js";

const app = express(); //initialize
app.use(cors()); //enabling
app.use(express.json()); //allows your api to accept content type json

//routes
app.post("/affirmations", addAffirmations);
app.get("/affirmations", getAllAffirmations);

export const api = functions.https.onRequest(app);
