import React from "react";
import { getSession } from "next-auth/client";
import AllItems from "../../components/feed/AllItems";
//import { getAllEvents } from "../../components/helpers/api-util";
import { Fragment } from "react";
import Head from "next/head";
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
        <h1 style={{ fontSize: "3rem", textDecoration: "underline" }}>
          Posted Items
        </h1>
      </div>

      <AllItems />
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
export default dashboard;
