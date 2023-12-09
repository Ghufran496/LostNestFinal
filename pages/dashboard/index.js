import React from "react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import AllItems from "../../components/feed/AllItems";

import { Fragment } from "react";
import Head from "next/head";



const dashboard = () => {
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
      <section style={{
          backgroundColor:"#f4f4f4"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          paddingTop:"3rem"
        }}
      >
        <h1 style={{ fontSize: "3.2rem"}}>Welcome To LostNest</h1>
        <h3 style={{textAlign:"center"}}>
          Thank You for being a part of LostNest community and helping each
          other.
        </h3>
        <h6
          style={{
            color: "#2e186a",
            margin: "auto",
            fontSize: "2.2rem",
            fontWeight:"500",
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
      </section>
    </Fragment>
  );
};
export async function getServerSideProps(context) {
  
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
export default dashboard;
