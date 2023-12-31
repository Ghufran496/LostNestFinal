
import { MongoClient } from "mongodb";
const { ObjectId } = require("mongodb");

let cachedClient = null;
let clientSet = false;

export async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client");
    return cachedClient;
  }

  let client;

  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;


  
try {
    client = await MongoClient.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
      poolSize: 10, // Adjust this based on your application's needs
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // If the error is related to a closed topology, attempt to reconnect
    if (error.message === "Topology is closed, please connect") {
      console.log("Topology is closed. Reconnecting...");
      connectToDatabase();
      return; // Stop executing the function since a reconnection attempt is already in progress
    }
  }

  // Handle the 'close' event for potential reconnection
  client.on("close", () => {
    console.log("Connection closed. Reconnecting...");
    connectToDatabase(); // Initiate reconnection on close event
  });

  if (!clientSet) {
    cachedClient = client;
    clientSet = true;
    console.log("return new client");
  }

  return client;
}

export async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("PostedItem").find({}).toArray();

  return data;
}

export async function getPostDataById(id) {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("PostedItem");
  const postobjectId = new ObjectId(id);

  const user = await usersCollection.findOne({
    _id: postobjectId,
  });

  return user;
}

export async function getResponseDataById(id) {
  const client = await connectToDatabase();

  const usersCollection = client.db().collection("QAnswers");

  const user = await usersCollection
    .find({
      PostID: id,
    })
    .toArray();
  return user;
}

export async function fetchallemails() {
  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");

  const allemails = await usersCollection
    .find({}, { projection: { password: 0, name: 0, _id: 0 } })
    .toArray();

  return allemails;
}

// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");



// export async function connectToDatabase() {
 

//   const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;



//   const  client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       connectTimeoutMS: 30000,
//       poolSize: 10, // Adjust this based on your application's needs
//     });
 
// console.log("return new");
  

  

//   return client;
// }

// export async function countTotalPosts() {
//   useEffect(() => {
//     fetch("/api/stats/getposts")
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }, []);
// }

// export async function getProfileData(userEmail) {
//   const client = await connectToDatabase();
//   const usersCollection = client.db().collection("users");
//   const user = await usersCollection.findOne(
//     { email: userEmail },
//     { projection: { password: 0 } }
//   );

//   return user;
// }

// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");

// let cachedClient = null;
// let clientSet = false;

// export async function connectToDatabase() {
//   if (clientSet) {
//     console.log("return already stored client" + cachedClient);
//     return cachedClient;
//   }

//   let client;

//   const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

//   client = await MongoClient.connect(connectionString, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     connectTimeoutMS: 30000,
//   });

//   if (!clientSet) {
//     cachedClient = client;
//     clientSet = true;
//     console.log("return new client");
//   }

//   return client;
// }

/*


import { MongoClient } from "mongodb";
const { ObjectId } = require("mongodb");

let cachedClient = null;
let clientSet = false;

export async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client" + cachedClient);
    return cachedClient;
  }

  const client = await MongoClient.connect(
    "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
    }
  );

  if (!clientSet) {
    cachedClient = client;
    clientSet = true;
    console.log("return new client");
  }

  return client;
}


*/
// export async function getPostsByEmail(email) {
//   //console.log(email);
//   const allPosts = await getAllPosts();
//   //console.log(allPosts);
//   // return allPosts.find((event) => event.posterEmail === email);
//   return allPosts.filter((event) => event.posterEmail === email);
// }
// export async function getPostDataById(id) {
//   const allPosts = await getAllPosts(); //w

//   const postobjectId = new ObjectId(id);
//   //console.log(postobjectId);

//   // return allPosts.find((event) => event._id === postobjectId);
//   return allPosts.find(
//     (event) => event._id.toString() === postobjectId.toString()
//   );
// }
// export async function getResponseDataById(id) {
//   const client = await connectToDatabase();
//   const db = client.db();

//   const data = await db.collection("QAnswers").find({}).toArray();

//   //console.log(data);
//   return data.filter((event) => event.PostID === id);
// }

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

// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");
// class Database {
//   constructor() {
//     if (!Database.instance) {
//       this.client = null;
//       this.clientSet = false;
//       Database.instance = this;
//     }

//     return Database.instance;
//   }

//   async connect() {
//     if (this.clientSet) {
//       console.log("return already stored client");
//       return this.client;
//     }

//     this.client = await MongoClient.connect(
//       "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         connectTimeoutMS: 30000,
//       }
//     );

//     if (!this.clientSet) {
//       this.clientSet = true;
//       console.log("return new client");
//     }

//     return this.client;
//   }
// }

// const database = new Database();
// export const connectToDatabase = async () => {
//   try {
//     return await database.connect();
//   } catch (error) {
//     //console.error("Error connecting to the database:", error);
//     throw error;
//   }
// };
