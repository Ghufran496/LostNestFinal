import { MongoClient } from "mongodb";
const { ObjectId } = require("mongodb");

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true, // Pass the useUnifiedTopology option here
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
    }
  );

  return client;
}

export async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("PostedItem").find({}).toArray();

  return data;
}

export async function getPostsByEmail(email) {
  //console.log(email);
  const allPosts = await getAllPosts();
  //console.log(allPosts);
  // return allPosts.find((event) => event.posterEmail === email);
  return allPosts.filter((event) => event.posterEmail === email);
}
export async function getPostDataById(id) {
  const allPosts = await getAllPosts(); //w

  const postobjectId = new ObjectId(id);
  //console.log(postobjectId);

  // return allPosts.find((event) => event._id === postobjectId);
  return allPosts.find(
    (event) => event._id.toString() === postobjectId.toString()
  );
}

export async function getResponseDataById(id) {
  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("QAnswers").find({}).toArray();
  //console.log(data);
  return data.filter((event) => event.PostID === id);
}

// export async function getPostsByObjectId(objectId) {
//   const allPosts = await getAllPosts();

//   //console.log(allPosts); good
//   console.log(objectId);
//   const data2 = allPosts.find((item) => item._id.equals(objectId));
//   console.log(data2);
//   return data2;
// }
// import { ObjectId } from "mongodb";

// export async function getPostsByObjectId(objectId) {
//   const allPosts = await getAllPosts();

//   const data2 = allPosts.find((item) => item._id.equals(objectId));
//   console.log(data2);
//   return data2;
// }
