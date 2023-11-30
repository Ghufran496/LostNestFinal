import React from "react";
//import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import AllItems from "../../components/feed/AllItems";
//import { getAllEvents } from "../../components/helpers/api-util";
import { Fragment } from "react";
//import Head from "next/head";
import Head from "next/script";
//http://localhost:3000/dashboard/64fdbd973e38583470fb6b77

const dashboard = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="All Posted items who are either Lost or Found"
        />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>Welcome To LostNest</h1>
        <h3>
          Thank You for being a part of LostNest community and helping each
          other.
        </h3>
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
          Posted Items
        </h6>
      </div>

      <AllItems />
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
  // console.log(session.user.email);

  return {
    props: {  },
  };
}
export default dashboard;
