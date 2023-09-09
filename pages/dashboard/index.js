import React from "react";
import { getSession } from "next-auth/client";
import { useState } from "react";

const dashboard = () => {
  const [isImage, setIsImage] = useState("");
  const loadFeedbackHandler = () => {
    fetch("/api/post/postitem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data[9].ReducedImg);
        setIsImage(data[9].ReducedImg);
      });
  };

  return (
    <>
      <div>I am a Dashboard Component</div>
      <button onClick={loadFeedbackHandler}>load data</button>
      <img width={200} height={100} src={isImage}></img>
    </>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
export default dashboard;
