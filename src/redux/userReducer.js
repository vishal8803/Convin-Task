import * as actionTypes from "./actions";

const initialState = {
  loadingAllUser: true,
  loadingSingleUser: false,
  error: "",
  users: [],
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USER_REQ:
      return { ...state, loadingAllUser: true };
    case actionTypes.FETCH_ALL_USER_SUCC:
      return {
        ...state,
        loadingAllUser: false,
        users: [...action.payload.users],
      };
    case actionTypes.FETCH_ALL_USER_FAIL:
      return { ...state, loadingAllUser: false, error: action.payload.error };
    case actionTypes.FETCH_SINGLE_USER_REQ:
      return { ...state, loadingSingleUser: true };
    case actionTypes.FETCH_SINGLE_USER_SUCC:
      return {
        ...state,
        loadingSingleUser: false,
        currentUser: { ...action.payload.user },
      };
    case actionTypes.FETCH_SINGLE_USER_FAIL:
      return { ...state, loadingSingleUser: false };
    default:
      return state;
  }
};

export default userReducer;
