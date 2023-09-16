import React from "react";
import { useEffect, useState } from "react";
import PostGrid from "./PostGrid";

// import Loader from "../UI/Loader";
import Loading from "../UI/Loading";
function AllItems() {
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
  }, [setIsData]);

  return (
    <div>
      <PostGrid data={isData} />
      {isLoading && <Loading />}
    </div>
  );
}

export default AllItems;
