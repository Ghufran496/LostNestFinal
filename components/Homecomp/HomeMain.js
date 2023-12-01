import React from "react";
import Image from "next/image";

import classes from "./HomeMain.module.css";
import Link from "next/link";
import Button from "../UI/Button";
import Vision from "./Vision";

const HomeMain = () => {
  return (
    <>
      <section className={classes.sec1}>
        <div className={classes.part1}>
          <h1 id="title-h">Lost and Found</h1>
          <p>Lost it. List it. Find it.</p>

          <Link href="#section3" legacyBehavior>
            <a>
              <Button content="Get Started" />
            </a>
          </Link>
          
        </div>

        <div className={classes.part2}>
          <div className="image">
            <Image
              src="/images/developer.png"
              width={250}
              height={150}
              alt="loading"
              priority
            ></Image>
          </div>
        </div>
      </section>
      <Vision />
      <section id="section3" className={classes.sec3}>
        <div className={classes.totalabout}>
          <div className={classes.aboutheading}>
            <h6 className={classes.sectionheading}>How it works?</h6>
          </div>
          <div className={classes.aboutcard}>
            <div className={classes.info}>
              <Image
                src="/images/listitem.png"
                alt="Sign up image"
                width={150}
                height={150}
              />
              <h4 className={classes.head}>Create an account</h4>
              <p className={classes.para}>
                Initially, you have to create an account to get started.
              </p>
              <Link href="/auth" legacyBehavior>
                <a>
                  <Button content="Sign Up" />
                </a>
              </Link>
             
            </div>
            <div className={classes.info}>
              <Image
                src="/images/login.png"
                style={{ width: "200px", height: "130px" }}
                alt="lost and found list image"
                width={150}
                height={150}
              />
              <h4 className={classes.head}>List Lost/Found Item</h4>
              <p className={classes.para}>
                List your item by filling certain details.
              </p>
            </div>
            <div className={classes.info}>
              <Image
                src="/images/notification.png"
                style={{ width: "200px", height: "130px" }}
                alt="get Notified Image"
                width={150}
                height={150}
              />
              <h4 className={classes.head}>Get Notified</h4>
              <p className={classes.para}>
                We notify registered users of listed items.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
