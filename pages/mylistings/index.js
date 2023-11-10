import React from "react";
import { Fragment } from "react";
import Specificpost from "../../components/mylistings/Specificpost";
import { getSession } from "next-auth/client";
//http://localhost:3000/mylistings/654bc2921efc6c1070461e13
const MyListings = () => {
  return (
    <Fragment>
      <h6
        style={{
          color: "#2e186a",
          margin: "auto",
          fontSize: "2.575rem",
          padding: "0.5rem 0",
          borderBottom: "3px solid #2e186a",
          width: "15rem",
          textAlign: "center",
        }}
      >
        My Listings
      </h6>
      <Specificpost />
    </Fragment>
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
export default MyListings;
