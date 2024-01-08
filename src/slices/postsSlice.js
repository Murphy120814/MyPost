import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "1",
      title: "learning the toolkit",
      content: "I have heard good things",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsup: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: "2",
      title: "learning the toolkit with dev gray",
      content: "I have heard good things about him",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsup: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
  ],

  reducers: {
    postAdd: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
});

export const selectAllPosts = (globalState) => globalState.posts;
export const { postAdd, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
