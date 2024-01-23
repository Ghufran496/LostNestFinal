import React from "react";
import { useEffect, useState } from "react";
import ErrorComp from "../UI/ErrorComp";
import SpecificGrid from "./SpecificGrid";
import Loading from "../UI/Loading";

function Specificpost() {
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    setIsLoading(true);

    fetch("/api/myposts/fetchmypost")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          const dataArray = Array.isArray(data) ? data : [data];

          setIsData(dataArray);

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

    // Cleanup function
    return () => {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []);

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }

  return (
    <div className="text-center mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12">
      {isData.length === 0 && !isLoading ? (
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 justify-center items-center">
          You have not listed any posts
        </p>
      ) : (
        <SpecificGrid data={isData} />
      )}
      {isLoading && <Loading />}
    </div>

    
  );
}

export default Specificpost;
