import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Loading from "../UI/Loading";
import PersonalProfile from "./profilecomp/userprofile-comp";
import ErrorComp from "../UI/ErrorComp";

function ProfileFront() {
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/profile/profiledata")
      .then((response) => response.json())
      .then((data) => {
        setIsData(data);
        if (data.message) {
          setIsErrorData(data.message);
          setIsError(true);
        }
        setIsLoading(false); // Move this here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Make sure to handle errors as well
      });
  }, [setIsData, setIsError, setIsErrorData]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
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
