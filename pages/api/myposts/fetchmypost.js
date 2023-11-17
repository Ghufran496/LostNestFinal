import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    return;
  } else {
    const session = await getSession({ req: req });
    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }
    const userEmail = session.user.email;
    try {
      //const data = await getPostsByEmail(userEmail);
      const client = await connectToDatabase();

      const usersCollection = client.db().collection("PostedItem");

      const data = await usersCollection
        .find({
          posterEmail: userEmail,
        })
        .toArray();

      res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message:
          "Internal Server Error: Unable to fetch and Display Specific Posts",
      });
      return;
    }
  }
}

export default handler;

// import { getPostsByEmail } from "../../../lib/db";
// import { getSession } from "next-auth/client";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     return;
//   } else {
//     const session = await getSession({ req: req });
//     if (!session) {
//       res.status(401).json({ message: "Not authenticated!" });
//       return;
//     }

//     try {
//       const userEmail = session.user.email;

//       const data = await getPostsByEmail(userEmail);
//       //console.log(data);

//       res.status(200).json(data);
//       client.close();
//     } catch (error) {
//       // console.error("Error:", error);
//       res.status(500).json({
//         message:
//           "Internal Server Error: Unable to fetch and Display Specific Posts",
//       });
//       client.close();
//     }
//   }
// }

// export default handler;
