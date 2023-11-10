// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import { Fragment } from "react";
// import EventSummary from "../../components/feed/FeedDetails/event-summary";
// import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
// import EventContent from "../../components/feed/FeedDetails/event-content";
// import QuestionForm from "../../components/overlayForm/QuestionForm";
// import classes from "./itemid.module.css";

// const { ObjectId } = require("mongodb");
// import Loading from "../../components/UI/Loading";
// import { connectToDatabase } from "../../lib/db";

// function ItemDetailPage(props) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showQForm, setIsShowQForm] = useState(false);

//   const { extractedObject } = props;

//   if (!extractedObject) {
//     return <Loading />; // Render loading spinner if no data is available
//   }

//   useEffect(() => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Simulate a loading time of 5 seconds
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }
//   const event = extractedObject;

//   const showModeHandler = () => {
//     setIsShowQForm(true);
//   };
//   const hideModeHandler = () => {
//     setIsShowQForm(false);
//   };

//   return (
//     <Fragment>
//       <Head>
//         <title>{event.Title}</title>
//         <meta name="description" content={event.Description} />
//       </Head>
//       <EventSummary Title={event.Title} />

//       <EventLogistics
//         Date={event.Date}
//         ReducedImg={event.ReducedImg}
//         Title={event.Title}
//         Type={event.Type}
//         Category={event.Category}
//       />

//       <EventContent>
//         <p>{event.Description}</p>
//       </EventContent>
//       <div className={classes.btndiv}>
//         <button
//           onClick={showModeHandler}
//           className={classes.button52}
//           role="button"
//         >
//           Claim this {event.Title}
//         </button>
//       </div>

//       {showQForm && <QuestionForm onclose={hideModeHandler} data={event} />}
//     </Fragment>
//   );
// }

// export async function getServerSideProps(context) {
//   const postId = context.params.itemid;
//   const objectId = new ObjectId(postId); // Convert postId to ObjectId

//   const client = await connectToDatabase();
//   const db = client.db();

//   const data = await db.collection("PostedItem").find({}).toArray();

//   const extractedObject = data.find((item) => item._id.equals(objectId));

//   return {
//     props: {
//       extractedObject: JSON.parse(JSON.stringify(extractedObject)),
//     },
//   };
// }

// export default ItemDetailPage;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Fragment } from "react";
import EventSummary from "../../components/feed/FeedDetails/event-summary";
import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
import EventContent from "../../components/feed/FeedDetails/event-content";
import QuestionForm from "../../components/overlayForm/QuestionForm";
import classes from "./itemid.module.css";
import { getPostDataById } from "../../lib/db";

import Loading from "../../components/UI/Loading";

function ItemDetailPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [showQForm, setIsShowQForm] = useState(false);
  const [processedObject, setProcessedObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { extractedObject } = props;

      if (typeof extractedObject === "object") {
        setProcessedObject(extractedObject);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    };

    fetchData();
  }, [props.extractedObject]);

  if (isLoading || !processedObject) {
    return <Loading />;
  }

  const event = processedObject;

  const showModeHandler = () => {
    setIsShowQForm(true);
  };
  const hideModeHandler = () => {
    setIsShowQForm(false);
  };

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
      <div className={classes.btndiv}>
        <button
          onClick={showModeHandler}
          className={classes.button52}
          role="button"
        >
          Claim this {event.Title}
        </button>
      </div>

      {showQForm && <QuestionForm onclose={hideModeHandler} data={event} />}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const postData = await getPostDataById(postId);

  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(postData)),
    },
  };
}

export default ItemDetailPage;
