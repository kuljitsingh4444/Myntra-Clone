import Types from "./types";

const addCommentAction = (data) => ({
  type: Types.ADD_COMMENT,
  data: data,
});

export default {
  addCommentAction,
};
