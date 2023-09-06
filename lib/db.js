// import { MongoClient } from "mongodb";
// export async function connectToDatabase() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority"
//   );

//   return client;
// }

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
