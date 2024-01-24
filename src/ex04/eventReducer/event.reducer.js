export const initialState = {
  events: [],
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "CANCEL_EVENT":
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== action.payload.eventId,
        ),
      };
    case "ADD_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendee: [...event.attendee, action.payload.attendee],
              }
            : event,
        ),
      };
    case "REMOVE_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendee: event.attendee.filter(
                  (attendeePerson) =>
                    attendeePerson.id !== action.payload.attendeeId,
                ),
              }
            : event,
        ),
      };
    default:
      return state;
  }
}

export default eventReducer;
