import Types from "../types";

const initialState = {
  response: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_RESPONSE:
      return {
        ...state,
        response: action.data
      };

    default:
      return state;
  }
}
