import { useDispatch } from "react-redux";
import { reactionAdded } from "../slices/postsSlice";
import React from "react";

const reactionObj = {
  thumbsup: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function PostReactions({ post }) {
  const dispatch = useDispatch();
  const reactionsOnPost = Object.entries(reactionObj).map(
    ([name, emoji], index) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }>
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div className="flex gap-2">{reactionsOnPost}</div>;
}

export default PostReactions;
