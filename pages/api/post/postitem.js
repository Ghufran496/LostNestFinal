import { connectToDatabase } from "../../../lib/db";
import { getSession } from "next-auth/client";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const session = await getSession({ req: req });
    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }
    const posterEmail = session.user.email;
    const { Type, Category, Title, Description, Question, Date, ReducedImg } =
      data;

    if (
      !Type ||
      !Category ||
      !Title ||
      !Description ||
      !Question ||
      !Date ||
      !ReducedImg
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const client = await connectToDatabase();

    const db = client.db();

    const result = await db.collection("PostedItem").insertOne({
      Type: Type,
      Category: Category,
      Title: Title,
      Description: Description,
      Question: Question,
      Date: Date,
      ReducedImg: ReducedImg,
      posterEmail: posterEmail,
    });

    res.status(201).json({ message: "Item Posted!" });
    client.close();
  } else {
    const client = await connectToDatabase();
    try {
      const db = client.db();

      const data = await db.collection("PostedItem").find({}).toArray();

      res.status(200).json(data);
      client.close();
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error: Unable to fetch and Display Posts",
      });
      client.close();
    } finally {
      // Close the client in the finally block to ensure it happens in all cases
      if (client) {
        await client.close();
      }
    }
  }
}

export default handler;
