import React from "react";
import FoundForm from "../../components/postcomp/FoundForm";
import classes from "./PostItem.module.css";
import { getSession } from "next-auth/client";
function PostLostItem() {
  return (
    <div className={classes.center}>
      <FoundForm />
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
export default PostLostItem;
