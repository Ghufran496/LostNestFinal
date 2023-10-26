import React, { Fragment } from "react";
import { getSession } from "next-auth/client";
import UserProfile from "../../components/profile/user-profile";
function ModifyPass() {
  return (
    <Fragment>
      <UserProfile />
    </Fragment>
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
    props: {
      session,
    },
  };
}
export default ModifyPass;
