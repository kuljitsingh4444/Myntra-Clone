import Types from "../types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case Types.ADD_COMMENT:
    //   if (Array.isArray(action.data)) {
    //     return {
    //       ...state,
    //       comments: action.data,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       comments: [...state.comments, action.data],
    //     };
    //   }

    default:
      return state;
  }
}
