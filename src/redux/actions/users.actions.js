import { FETCH_USERS, ADD_CHAT } from "../constants/user.constants";

export const fetchUsers = (users) => ({
  type: FETCH_USERS,
  payload: users,
});

export const addChat = (payload) => ({
  type: ADD_CHAT,
  payload,
});
