import React from "react";
import PostForm from "../../components/postcomp/PostForm";
import classes from "./PostItem.module.css";

function PostItem() {
  return (
    <div className={classes.center}>
      <PostForm />
    </div>
  );
}

export default PostItem;
