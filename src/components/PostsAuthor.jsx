import React from "react";
import { selectAllUsers } from "../slices/usersSlice";
import { useSelector } from "react-redux";

function PostsAuthor({ userId }) {
  const authors = useSelector(selectAllUsers);
  const author = authors.find((user) => user.id == userId);
  const authorName = author ? author.name : "Unknown Author";
  return <span>{authorName}</span>;
}

export default PostsAuthor;
