//import Image from "next/image";
import DateIcon from "../../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import TypeIcon from "../../icons/type-icon";
import CategoryIcon from "../../icons/category-icon";
import { Fragment } from "react";
import Head from "next/head";

function EventLogistics(props) {
  const { Type, Category, Title, Date, ReducedImg } = props;

  return (
    <Fragment>
      <Head>
        <title>{Title}</title>
        <meta name="description" content={Title} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <section className={classes.logistics}>
        <div className={classes.image}>
          <img src={ReducedImg} alt={Title} width={400} height={400} />
        </div>
        <ul className={classes.list}>
          <LogisticsItem>
            <span className={classes.spaner}>
              <DateIcon className={classes.icon} />
            </span>

            <time>{Date}</time>
          </LogisticsItem>
          <LogisticsItem>
            <span className={classes.spaner}>
              <i className="fa fa-heart"></i>
            </span>
            <div>{Type}</div>
          </LogisticsItem>
          <LogisticsItem>
            <span className={classes.spaner}>
              <CategoryIcon className={classes.icon} />
            </span>
            <div>{Category}</div>
          </LogisticsItem>
        </ul>
      </section>
    </Fragment>
  );
}

export default EventLogistics;
