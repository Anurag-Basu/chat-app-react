import {
  CREATE_CONVERSATION,
  ADD_MESSAGE,
} from "../constants/conversations.constants";

//initial state
let initialState = {
  chats: {},
};

// chat reducer
const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    // creating conversation
    case CREATE_CONVERSATION:
      const newConversation = {};
      newConversation[action.payload.id] = {
        emails: [action.payload.email1, action.payload.email2],
        chats: [],
      };
      return {
        chats: { ...state.chats, ...newConversation },
      };
    // adding message to conversation
    case ADD_MESSAGE:
      const chatId = action.payload.id;
      const chats = { ...state.chats };
      chats[chatId].chats = [
        ...chats[chatId].chats,
        {
          message: action.payload.message,
          time: new Date().toDateString(),
          right: chats[chatId].emails[1] === action.payload.email,
        },
      ];
      return {
        ...state,
        chats,
      };

    default:
      return state;
  }
};

export default chatsReducer;
