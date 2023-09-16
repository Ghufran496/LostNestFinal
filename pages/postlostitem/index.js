import React from "react";
import PostForm from "../../components/postcomp/PostForm";
import classes from "./PostItem.module.css";
import { getSession } from "next-auth/client";
function PostItem() {
  return (
    <div className={classes.center}>
      <PostForm />
    </div>
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
