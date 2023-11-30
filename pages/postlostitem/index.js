import React, { Fragment } from "react";
import classes from "./PostItem.module.css";
//import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
//import Head from "next/head";
import Head from "next/script";
import PostNewItem from "../../components/postcomp/PostNewItem";
//import Loadings from "../../components/notificationOverlay/Loadings";
function PostItem() {
  return (
    <Fragment>
      <Head>
        <title>Post Lost Item</title>
        <meta
          name="description"
          content="If you have Lost anything post here"
        />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <div className={classes.center}>
        <PostNewItem />
      </div>
      {/* <Loadings /> */}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  //const session = await getSession({ req: context.req });
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {  },
  };
}
export default PostItem;
