import React from "react";
import PostsAuthor from "./PostsAuthor";
import PostTimeAgo from "./PostTimeAgo";
import PostReactions from "./PostReactions";

function IndividualPost({ orderedList }) {
  return (
    <div>
      {orderedList?.map((post) => (
        <article key={post.id} className=" w-full border border-green-400 p-2">
          <h1>{post.title}</h1>
          <p>{post.body?.slice(0, 100)}</p>
          <p>
            <PostsAuthor userId={post.userId} />
          </p>
          <p>
            <PostTimeAgo timeStamp={post.date} />
          </p>

          <PostReactions post={post} />
        </article>
      ))}
    </div>
  );
}

export default IndividualPost;
