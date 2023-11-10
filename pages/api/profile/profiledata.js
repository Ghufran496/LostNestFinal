import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ message: "Not authenticated!" });
    }

    const userEmail = session.user.email;
    const client = await connectToDatabase();
    const usersCollection = client.db().collection("users");
    const user = await usersCollection.findOne(
      { email: userEmail },
      { projection: { password: 0 } }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const profileData = JSON.parse(JSON.stringify(user));

    return res.status(200).json(profileData);
  } catch (error) {
    console.error("Error handling profile data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) {
      client.close();
    }
  }
}

export default handler;

// import { getSession } from "next-auth/client";
// import { connectToDatabase } from "../../../lib/db";

// async function handler(req, res) {
//   if (req.method === "GET") {
//     const session = await getSession({ req: req });

//     if (!session) {
//       res.status(401).json({ message: "Not authenticated!" });
//       return;
//     }

//     //console.log(session);
//     const userEmail = session.user.email;
//     const client = await connectToDatabase();
//     const usersCollection = client.db().collection("users");
//     const user = await usersCollection.findOne(
//       { email: userEmail },
//       { projection: { password: 0 } }
//     );
//     if (!user) {
//       res.status(404).json({ message: "User not found." });
//       client.close();
//       return;
//     }
//     const Profiledata = JSON.parse(JSON.stringify(user));

//     res.status(200).json(Profiledata);
//     client.close();
//   }
// }

// export default handler;
