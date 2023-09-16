import React, { Fragment } from "react";
import PostForm from "../../components/postcomp/PostForm";
import classes from "./PostItem.module.css";
import { getSession } from "next-auth/client";
import Head from "next/head";
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
        <PostForm />
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
export default PostItem;
