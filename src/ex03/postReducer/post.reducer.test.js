import postReducer from "./post.reducer";

describe("post reducer", () => {
  it("should create a new post", () => {
    const initialState = {
      posts: [],
    };
    const action = {
      type: "CREATE_POST",
      payload: { id: 1, author: "author1", content: "new content" },
    };
    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [{ id: 1, author: "author1", content: "new content", likes: 0 }],
    });
  });
  it("should edit a post content", () => {
    const initialState = {
      posts: [{ id: 1, author: "author1", content: "new content", likes: 0 }],
    };
    const action = {
      type: "EDIT_POST",
      payload: { id: 1, newContent: "edited content" },
    };
    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [
        { id: 1, author: "author1", content: "edited content", likes: 0 },
      ],
    });
  });
  it("should delete a post", () => {
    const initialState = {
      posts: [{ id: 1, author: "author1", content: "new content", likes: 0 }],
    };
    const action = {
      type: "DELETE_POST",
      payload: { id: 1 },
    };
    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [],
    });
  });
  it("should like a post", () => {
    const initialState = {
      posts: [{ id: 1, author: "author1", content: "new content", likes: 0 }],
    };
    const action = {
      type: "LIKE_POST",
      payload: { id: 1 },
    };
    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [{ id: 1, author: "author1", content: "new content", likes: 1 }],
    });
  });
});
