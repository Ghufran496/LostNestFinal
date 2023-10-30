import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

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
    });

    res.status(201).json({ message: "Item Posted!" });
    client.close();
  } else {
    try {
      const client = await connectToDatabase();
      const db = client.db();

      const data = await db.collection("PostedItem").find({}).toArray();

      res.status(200).json(data);
      client.close();
    } catch (error) {
      // console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error: Unable to fetch and Display Posts",
      });
      client.close();
    }
  }
}

export default handler;
