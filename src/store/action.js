import { ADD_COMMENT, CHANGE_GOOD } from "./cationType";
const addComment = (newComment, callBack, id) => {
  return {
    type: ADD_COMMENT,
    newComment,
    callBack,
    id
  };
};
const changeGood = id => {
  return {
    type: CHANGE_GOOD,
    id
  };
};
export { addComment, changeGood };
