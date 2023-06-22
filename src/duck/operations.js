import ActionCreator from "./action";

export const addCommentOperation = (data) => (dispatch) => {
  dispatch(ActionCreator.addCommentAction(data));
};
