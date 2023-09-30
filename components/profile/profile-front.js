import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Loading from "../UI/Loading";
import PersonalProfile from "./profilecomp/userprofile-comp";

function ProfileFront() {
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/profile/profiledata")
      .then((response) => response.json())
      .then((data) => {
        setIsData(data);
        setIsLoading(false); // Move this here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Make sure to handle errors as well
      });
  }, [setIsData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <PersonalProfile
        name={isData.name}
        id={isData._id}
        email={isData.email}
      />
    </Fragment>
  );
}

export default ProfileFront;
/*

 const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/post/postitem")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setIsData(data);
      });
    setIsLoading(false);
  }, [setIsData]);*/
