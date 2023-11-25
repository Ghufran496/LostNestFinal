import { getSession } from "next-auth/client";
//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
import { Fragment } from "react";
import Head from "next/head";
import ProfileFront from "../../components/profile/profile-front";

function ProfilePage() {
  return (
    <Fragment>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Your Profile content" />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <div
        style={{
          fontSize: "2rem",
          color: "#311465",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bolder",

          marginBottom: "2rem",
        }}
      >
        Profile
      </div>
      <ProfileFront />
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

export default ProfilePage;
