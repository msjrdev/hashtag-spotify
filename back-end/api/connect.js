// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dbUMonDB:phWSeq9a-9yYmVL@cluster0.fe8kf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
