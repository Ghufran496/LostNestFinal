import React from "react";
import { useEffect, useState } from "react";
import PostGrid from "./PostGrid";

import Loader from "../UI/Loader";
function AllItems(props) {
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
  }, []);

  return (
    <div>
      <PostGrid data={isData} />
      {isLoading && <Loader />}
    </div>
  );
}

export default AllItems;