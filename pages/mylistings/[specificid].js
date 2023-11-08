import React from "react";
import classes from "./specificid.module.css";
import Loading from "../../components/UI/Loading";
import EventSummary from "../../components/feed/FeedDetails/event-summary";
import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
import EventContent from "../../components/feed/FeedDetails/event-content";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Head from "next/head";
//import { getPostsByObjectId } from "../../lib/db";
const { ObjectId } = require("mongodb");
import { getAllPosts } from "../../lib/db";
import { connectToDatabase } from "../../lib/db";

function specificid(props) {
  const [isLoading, setIsLoading] = useState(false);

  const { extractedObject } = props;

  if (!extractedObject) {
    return <Loading />; // Render loading spinner if no data is available
  }
  // console.log(extractedObject);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const event = extractedObject;

  return (
    <Fragment>
      <Head>
        <title>{event.Title}</title>
        <meta name="description" content={event.Description} />
      </Head>
      <EventSummary Title={event.Title} />

      <EventLogistics
        Date={event.Date}
        ReducedImg={event.ReducedImg}
        Title={event.Title}
        Type={event.Type}
        Category={event.Category}
      />

      <EventContent>
        <p>{event.Description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const objectId = new ObjectId(postId); // Convert postId to ObjectId
  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("PostedItem").find({}).toArray();

  const extractedObject = data.find((item) => item._id.equals(objectId));
  console.log(extractedObject);

  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(extractedObject)),
    },
  };
}

export default specificid;
