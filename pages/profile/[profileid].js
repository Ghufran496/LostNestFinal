import React, { Fragment } from "react";
//import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import UserProfile from "../../components/profile/user-profile";
function ModifyPass() {
  return (
    <Fragment>
      <UserProfile />
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
    props: {
      
    },
  };
}
export default ModifyPass;
