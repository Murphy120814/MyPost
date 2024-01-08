import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

function PostTimeAgo({ timeStamp }) {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <span>{timeAgo}</span>;
}

export default PostTimeAgo;
