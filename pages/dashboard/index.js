import React from "react";
import { getSession } from "next-auth/client";
const dashboard = () => {
  return <div>I am a Dashboard Component</div>;
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
