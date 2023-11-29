import React from "react";

import classes from "./PostItem.module.css";
import { getSession } from "next-auth/client";
import { Fragment } from "react";
import FoundNewItem from "../../components/postcomp/FoundNewItem";

//import Head from "next/head";
import Head from "next/script";
function PostLostItem() {
  return (
    <Fragment>
      <Head>
        <title>Post Found Item</title>
        <meta
          name="description"
          content="If you have found anything post here"
        />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <div className={classes.center}>
        <FoundNewItem />
      </div>
    </Fragment>
  );
}
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
export default PostLostItem;
