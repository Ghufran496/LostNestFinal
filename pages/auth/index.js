import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Loading from "../../components/UI/Loading";
import { Fragment } from "react";
import AuthForm from "../../components/auth/auth-form";
import Head from "next/head";
function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
        <meta
          name="description"
          content="Login/Register in Lost and Found Hub for University Students"
        />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <AuthForm />
    </Fragment>
  );
}

export default AuthPage;
