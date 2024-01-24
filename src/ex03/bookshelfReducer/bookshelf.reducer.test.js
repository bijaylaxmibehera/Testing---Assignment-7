import bookshelfReducer from "./bookshelf.reducer";

describe("bookshelf reducer", () => {
  it("should add new book", () => {
    const initialState = {
      books: [],
      categories: [],
    };
    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "book1",
        author: "author1",
      },
    };
    const updatedState = bookshelfReducer(initialState, action);
    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "book1",
          author: "author1",
          category: null,
        },
      ],
      categories: [],
    });
  });

  it("should add new category", () => {
    const initialState = {
      books: [],
      categories: [],
    };
    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "category 1",
      },
    };
    const updatedState = bookshelfReducer(initialState, action);
    expect(updatedState).toEqual({
      books: [],
      categories: [
        {
          id: 1,
          name: "category 1",
        },
      ],
    });
  });
  it("should assign category to book", () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: "book1",
          author: "author1",
          category: null,
        },
      ],
      categories: [
        {
          id: 1,
          name: "category 1",
        },
      ],
    };
    const action = {
      type: "ASSIGN_CATEGORY",
      payload: { bookId: 1, categoryId: 1 },
    };
    const updatedState = bookshelfReducer(initialState, action);
    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "book1",
          author: "author1",
          category: 1,
        },
      ],
      categories: [
        {
          id: 1,
          name: "category 1",
        },
      ],
    });
  });
});
