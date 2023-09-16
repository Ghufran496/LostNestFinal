import { getSession } from "next-auth/client";

import UserProfile from "../../components/profile/user-profile";
import { Fragment } from "react";
import Head from "next/head";
function ProfilePage() {
  return (
    <Fragment>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Your Profile content" />
        <link rel="icon" href="/images/logos.png" />
      </Head>
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
    props: { session },
  };
}

export default ProfilePage;
