import React from "react";
import { useEffect, useState } from "react";
import ErrorComp from "../UI/ErrorComp";
import Loading from "../UI/Loading";
import ResponseGrid from "./ResponseGrid";

const AllResponses = () => {
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    setIsLoading(true);

    fetch("/api/answers/sendResponse")
      .then((response) => response.json())
      .then((data) => {
        //console.log("data in client" + data);
        if (isMounted) {
          setIsData(data);
          if (data.message) {
            setIsErrorData(data.message);
            setIsError(true);
          }
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setIsError(true);
          setIsErrorData("An error occurred while fetching data.");
          setIsLoading(false);
        }
        console.error("Fetch error:", error);
      });

    //Cleanup function
    return () => {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []);

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }

  return (
    <div>
      {isData.length === 0 && !isLoading ? (
        <p
          style={{
            fontSize: "1.5rem",
            display: "flex",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Responses Found...
        </p>
      ) : (
        <ResponseGrid data={isData} />
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default AllResponses;
