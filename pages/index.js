import HomeMain from "../components/Homecomp/HomeMain";
import { Fragment } from "react";
import Head from "next/head";
import Footer from "../components/Global/Footer";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Lost Nest</title>
        <meta
          name="description"
          content="Lost and Found Hub for University Students"
        />
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <HomeMain />
      <Footer></Footer>
    </Fragment>
  );
}
// "mdb-react-ui-kit": "^6.3.0",
export default HomePage;
