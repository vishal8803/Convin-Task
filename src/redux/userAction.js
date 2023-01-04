import * as actionTypes from "./actions";
import axios from "axios";

const fetchReq = () => {
  return {
    type: actionTypes.FETCH_ALL_USER_REQ,
  };
};

const fetchSucc = (users) => {
  return {
    type: actionTypes.FETCH_ALL_USER_SUCC,
    payload: { users: users.data },
  };
};

const fetchFail = (err) => {
  return {
    type: actionTypes.FETCH_ALL_USER_FAIL,
    payload: { users: err.message },
  };
};

const fetchSingleReq = () => {
  return {
    type: actionTypes.FETCH_SINGLE_USER_REQ,
  };
};

const fetchSingleSucc = (users) => {
  return {
    type: actionTypes.FETCH_SINGLE_USER_SUCC,
    payload: { user: users.data },
  };
};

const fetchSingleFail = (err) => {
  return {
    type: actionTypes.FETCH_SINGLE_USER_FAIL,
  };
};

export const fetchUserss = () => {
  // thunk middleware
  return async (dispatch) => {
    dispatch(fetchReq());
    try {
      let res = await axios.get(
        "https://reqres.in/api/users?page=1&per_page=12"
      );

      dispatch(fetchSucc(res.data));
    } catch (err) {
      dispatch(fetchFail(err));
    }
  };
};

export const fetchUserWithId = (id) => {
  return async (dispatch) => {
    dispatch(fetchSingleReq());
    try {
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch(fetchSingleSucc(res.data));
    } catch (err) {
      dispatch(fetchSingleFail(err));
    }
  };
};
