import Types from "./types";

const addCommentAction = (data) => ({
  type: Types.UPDATE_RESPONSE,
  data: data,
});

export default {
  addCommentAction,
};
