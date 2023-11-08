import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true, // Pass the useUnifiedTopology option here
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
  return allPosts.find((event) => event.posterEmail === email);
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
