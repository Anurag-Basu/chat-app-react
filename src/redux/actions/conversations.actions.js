import {
  CREATE_CONVERSATION,
  ADD_MESSAGE,
} from "../constants/conversations.constants";

export const createConversation = (payload) => ({
  type: CREATE_CONVERSATION,
  payload,
});

export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
});
