import React from "react";
import { Fragment } from "react";
import Specificpost from "../../components/mylistings/Specificpost";
//import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import classes from "./indexmain.module.css";

//http://localhost:3000/mylistings/654bc2921efc6c1070461e13
const MyListings = () => {
  return (
    <Fragment>
      <h6 className={classes.head6}>My Listings</h6>
      <Specificpost />
    </Fragment>
  );
};

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
export default MyListings;
