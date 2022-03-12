import { combineReducers } from "redux";
import users from "./users.reducer";
import chats from "./conversations.reducer";

// combining users and chats reducer 
export default combineReducers({ users, chats });
