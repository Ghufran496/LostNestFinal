import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../lib/db";
import UserProfile from "../../components/profile/user-profile";
import { Fragment } from "react";
import Head from "next/head";
import Loading from "../../components/UI/Loading";
import { useEffect, useState } from "react";

function ProfilePage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { profileData } = props;
  if (!profileData) {
    return <Loading />; // Render loading spinner if no data is available
  }
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Your Profile content" />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <p>{profileData.name}</p>
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

  const userEmail = session.user.email;
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne(
    { email: userEmail },
    { projection: { password: 0 } }
  );

  return {
    props: {
      session,
      profileData: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default ProfilePage;
