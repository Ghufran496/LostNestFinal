import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }
    const userEmail = session.user.email;
    const client = await connectToDatabase();
    const usersCollection = client.db().collection("users");
    const user = await usersCollection.findOne(
      { email: userEmail },
      { projection: { password: 0 } }
    );
    if (!user) {
      res.status(404).json({ message: "User not found." });
      client.close();
      return;
    }
    const Profiledata = JSON.parse(JSON.stringify(user));

    res.status(200).json(Profiledata);
    client.close();
  }
}

export default handler;