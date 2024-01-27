import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import PostGrid from "./PostGrid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../UI/Loading";
function AllItems() {
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    setIsLoading(true);

    fetch("/api/post/postitem")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setIsData(data);
          // if (data && data.length > 0) {
          //   toast.success("Posts successfully retrieved.", { theme: "colored" });
          // }
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          toast.error("An error occurred while fetching data.", {
            theme: "colored",
          });
          setIsLoading(false);
        }
      });

    //Cleanup function
    return () => {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []);

  return (
    <Fragment>
      <ToastContainer autoClose={1500} draggable closeOnClick />
      <div>
        {isData.length === 0 && !isLoading ? (
          <p
            style={{
              fontSize: "2rem",
              display: "flex",
              marginTop: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No Posts Found...
          </p>
        ) : (
          <PostGrid data={isData} />
        )}
        {isLoading && <Loading />}
      </div>
    </Fragment>
  );
}

export default AllItems;
