import React from "react";
// import developer from "@/public/images/developer_outline I.svg";
//mport developer from "../images/logo.png";
//import developer from "../images/developer.svg";
import classes from "./Vision.module.css";
import Image from "next/image";
const Vision = () => {
  return (
    <section className={classes.sec2}>
      <div className={classes.firstDiv}>
        <Image
          className={classes.developerimg}
          src="/images/lost.png"
          width={800}
          height={500}
          alt="loading"
        ></Image>
      </div>
      <div className={classes.inspiration}>
        <h6 className={classes.sectionheading}>Our Project Inspiration</h6>
        <p>
          On campus, students frequently face the challenge of losing valuable
          items like IDs and cards, causing stress and inconvenience. The
          current way to report and find lost items is complicated and
          scattered, making it hard for students to get their things back. In
          response to this pressing issue, the proposed "Lost and Found Hub for
          University Students" becomes a place where Lost Meets Found in the
          heart of campus life.
        </p>
      </div>
    </section>
  );
};

export default Vision;
