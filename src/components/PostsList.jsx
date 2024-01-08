import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../slices/postsSlice";
import PostsAuthor from "./PostsAuthor";
import PostTimeAgo from "./PostTimeAgo";
import PostReactions from "./PostReactions";
function PostsList() {
  const posts = useSelector(selectAllPosts);
  const orderedList = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = (
    <article>
      {orderedList.map((post) => (
        <article key={post.id} className=" w-full border border-green-400 p-2">
          <h1>{post.title}</h1>
          <p>{post.content.slice(0, 100)}</p>
          <p>
            <PostsAuthor userId={post.userId} />
          </p>
          <p>
            <PostTimeAgo timeStamp={post.date} />
          </p>

          <PostReactions post={post} />
        </article>
      ))}
    </article>
  );
  return (
    <section className=" mx-auto w-9/12 p-4 lg:w-4/12">
      Your Posts.
      {renderedPosts}
    </section>
  );
}

export default PostsList;
