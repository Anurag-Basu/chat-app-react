import { FETCH_USERS, ADD_CHAT } from "../constants/user.constants";

// Initial state of users
let initialState = {
  users: [],
  currentUser: {
    name: "Bob",
    phone: "(123) 555-7756",
    email: "bob@protonmail.org",
    chats: [],
  },
};


// userReducer
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch users
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    // add chat id to user
    case ADD_CHAT:
      const users = [...state.users];
      const index = users.findIndex(
        (user) => user.email === action.payload.email1
      );
      users[index].chats.push({
        id: action.payload.id,
        email: action.payload.email2,
        name: state.currentUser.name,
      });

      return {
        ...state,
        users,
        currentUser: {
          ...state.currentUser,
          chats: [
            ...state.currentUser.chats,
            {
              id: action.payload.id,
              email: action.payload.email1,
              name: users[index].name,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
