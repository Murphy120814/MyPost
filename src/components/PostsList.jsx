import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostStatus,
  getError,
  fetchPost,
} from "../slices/postsSlice";
import IndividualPost from "./IndividualPost";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostStatus);
  const error = useSelector(getError);
  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchPost());
    }
  }, []);
  let renderedPosts;
  if (status == "loading") {
    renderedPosts = <p>Loading data ...</p>;
  }
  if (status == "success") {
    const orderedList = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    renderedPosts = <IndividualPost orderedList={orderedList} />;
  }
  if (status === "failed") {
    renderedPosts = <p>{error}</p>;
  }

  return (
    <section className=" mx-auto w-9/12 p-4 lg:w-4/12">
      Your Posts.
      {renderedPosts}
    </section>
  );
}

export default PostsList;
