import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, message, enteredName } = data;

  if (!enteredName || !email || !email.includes("@") || !message) {
    res.status(422).json({
      message: "Invalid input - please enter correct details",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const result = await db.collection("ContactForm").insertOne({
    name: enteredName,
    email: email,
    Message: message,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
