import { connectToDatabase } from "../../../lib/db";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const answerGivenBY = session.user.email;
    const { enteredAnswer, postID, ItemTitle, Question, combinedDateTime } =
      data;

    if (!enteredAnswer || !postID || !answerGivenBY) {
      return res.status(400).json({ message: "fields are empty!" });
    }

    const client = await connectToDatabase();

    const db = client.db();

    const result = await db.collection("QAnswers").insertOne({
      Answer: enteredAnswer,
      PostID: postID,
      PosterID: answerGivenBY,
      ItemTitle: ItemTitle,
      Question: Question,
      SubmittedDateTime: combinedDateTime,
    });

    res.status(201).json({ message: "Answer Submitted" });
  } else {
    return;
  }
}

export default handler;
