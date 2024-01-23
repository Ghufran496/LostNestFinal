import React from "react";
import PostItem from "./PostItem";

import Loading from "../UI/Loading";

function PostGrid(props) {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loading />;
  }
  return (
    <ul className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
      {data.map((post) => (
        <PostItem key={post._id} data={post} />
      ))}
    </ul>
    
  );
}

export default PostGrid;
