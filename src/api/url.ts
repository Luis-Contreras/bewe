import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUrls = createAsyncThunk(
  "fetchUrls",
  async (thunkAPI) => {
    return {
      message: "success",
      data: [
        {
          url: "www.test.com",
          name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          url: "www.lorem.com",
          name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          url: "www.ipsum.com",
          name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          url: "www.ñoño.com",
          name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    };
  }
  // await fetch(`${LINKS_API}/singin`, {
  //   body: body,
  // })
  //   .then((response) => response.json())
  //   .then((data) => data)
);

const initialState = {
  links: [],
  loading: false,
  error: false,
} as any;

const linksReducers = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    addUrl(state, action) {
      state.links.unshift(action.payload);
    },
    deleteUrls(state, action) {
      const result = state.links.filter(
        (item: any) => item.url !== action.payload.url
      );
      state.links = result;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUrls.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchUrls.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUrls.fulfilled, (state, action) => {
      state.links = action.payload.data;
      state.loading = false;
    });
  },
});

export const { addUrl, deleteUrls } = linksReducers.actions;
export default linksReducers.reducer;
