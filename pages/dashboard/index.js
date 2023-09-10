import React from "react";
import { getSession } from "next-auth/client";
import AllItems from "../../components/feed/AllItems";

const dashboard = () => {
  return (
    <>
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
    </>
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
