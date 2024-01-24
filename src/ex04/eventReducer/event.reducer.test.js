import eventReducer from "./event.reducer";

describe("event reducer", () => {
  it("should create an event", () => {
    const initialState = {
      events: [],
    };
    const action = {
      type: "CREATE_EVENT",
      payload: {
        id: 1,
        name: "marriage",
        date: "2024-12-01",
        attendee: [],
      },
    };
    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [],
        },
      ],
    });
  });
  it("should cancel event from the list", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [],
        },
      ],
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: { eventId: 1 },
    };
    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [],
    });
  });
  it("should add attendee to the event", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [],
        },
      ],
    };
    const action = {
      type: "ADD_ATTENDEE",
      payload: { eventId: 1, attendee: { id: 1, name: "John" } },
    };
    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [{ id: 1, name: "John" }],
        },
      ],
    });
  });
  it("should remove attendee from the event", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [{ id: 1, name: "John" }],
        },
      ],
    };
    const action = {
      type: "REMOVE_ATTENDEE",
      payload: { eventId: 1, attendeeId: 1 },
    };
    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "marriage",
          date: "2024-12-01",
          attendee: [],
        },
      ],
    });
  });
});
