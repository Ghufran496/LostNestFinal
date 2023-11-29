import React from "react";
import classes from "./Footer.module.css";
//import Head from "next/head";
import Head from "next/script";
import { Fragment } from "react";
import Link from "next/link";
function Footer() {
  return (
    <Fragment>
      <Head>
        <title>Lost Nest</title>
        <meta
          name="description"
          content="Lost and Found Hub for University Students"
        />
        <link rel="icon" href="/images/logos.png" />
        
        {/* <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <script
        noModule
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script> */}
      </Head>
      <footer className={classes.footer}>
        <div className={classes.waves}>
          <div className={classes.wave} id="wave1"></div>
          <div className={classes.wave} id="wave2"></div>
          <div className={classes.wave} id="wave3"></div>
          <div className={classes.wave} id="wave4"></div>
        </div>
        {/* <ul className={classes.socialicon}>
          <li className={classes.socialiconitem}>
            <a className={classes.socialiconlink} href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className={classes.socialiconitem}>
            <a className={classes.socialiconlink} href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className={classes.socialiconitem}>
            <a className={classes.socialiconlink} href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className={classes.socialiconitem}>
            <a className={classes.socialiconlink} href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul> */}
        <ul className={classes.menu}>
        <li className={classes.menuitem}>
  <Link href="/" legacyBehavior>
    <a className={classes.menulink}>Home</a>
  </Link>
</li>
<li className={classes.menuitem}>
  <Link href="/auth" legacyBehavior>
    <a className={classes.menulink}>Login</a>
  </Link>
</li>
<li className={classes.menuitem}>
  <Link href="/stats" legacyBehavior>
    <a className={classes.menulink}>Stats</a>
  </Link>
</li>

          {/* <li className={classes.menuitem}>
            <a className={classes.menulink}>
              <Link href="/">Home</Link>
            </a>
          </li>
          <li className={classes.menuitem}>
            <a className={classes.menulink}>
              <Link href="/auth">Login</Link>
            </a>
          </li>
          <li className={classes.menuitem}>
            <a className={classes.menulink}>
              <Link href="/stats">Stats</Link>
            </a>
          </li> */}
          {/* <li className={classes.menuitem}>
            <a className={classes.menulink} href="#">
              Team
            </a>
          </li>
          <li className={classes.menuitem}>
            <a className={classes.menulink} href="#">
              Contact
            </a>
          </li> */}
        </ul>
        {/* <div className={classes.footerbg}>
          <div className={classes.footerbgone}></div>
          <div className={classes.footerbgtwo}></div>
        </div> */}
        {/* <p>&copy;2021 Nadine Coelho | All Rights Reserved</p> */}
      </footer>
    </Fragment>
  );
}

export default Footer;
