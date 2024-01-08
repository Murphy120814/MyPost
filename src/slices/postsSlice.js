import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { POST_URL } from "../../constant";
import { sub } from "date-fns";

export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const data = await fetch(POST_URL);
    const dataJSON = await data.json();

    return [...dataJSON];
  } catch (error) {
    console.log("error occurred", error);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    // idle ||  loading|| succeed || fail
    error: null,
  },

  reducers: {
    postAdd: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, body, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
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
      const existingPost = state.posts.find((post) => post.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        let min = 1;
        state.status = "success";
        const loadedPost = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        state.posts = state.posts.concat(loadedPost);
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (globalState) => globalState.posts.posts;
export const getPostStatus = (globalState) => globalState.posts.status;
export const getError = (globalState) => globalState.posts.error;
export const { postAdd, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
