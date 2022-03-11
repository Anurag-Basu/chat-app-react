import React, { useEffect, useState } from "react";
import { Avatar, Row } from "antd";
import { Search } from "react-feather";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { Conversation, User } from "../../components";
import { users as USERS } from "../../constants/users";

import {
  HomeContainer,
  ChatContainer,
  ChatHeader,
  ConversationConatiner,
  Flex,
  Sidebar,
  StyledAdd,
  StyledInput,
  StyledModal,
} from "../../styled/home.styled";
import { addChat, fetchUsers } from "../../redux/actions/users.actions";
import { createConversation } from "../../redux/actions/conversations.actions";

const Home = () => {
  const { userId } = useParams();

  const { users, currentUser } = useSelector((state) => state.users);
  const { chats } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterdChats, setFilteredChats] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [otherUser, setOtherUser] = useState();

  console.log({ users, currentUser, chats, c: chats[userId] });

  const create = (email) => {
    setShowModal(false);
    const prevChat = currentUser.chats.find((chat) => chat.email === email);
    if (prevChat) {
      navigate(`/chat/${prevChat.id}`);
      return;
    }
    const chatId = uuidv4();
    dispatch(
      createConversation({
        email1: email,
        email2: currentUser.email,
        id: chatId,
      })
    );
    dispatch(
      addChat({
        email1: email,
        email2: currentUser.email,
        id: chatId,
      })
    );
    navigate(`/chat/${chatId}`);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value) {
      setFilteredChats(chats);
      return;
    }

    const filterd = currentUser.chats.filter((chat) =>
      chat.name.toLowerCase().includes(value)
    );
    const filteredIds = filterd.map((fil) => fil.id);

    setFilteredChats(_.pickBy(chats, (_v, key) => filteredIds.includes(key)));
  };

  useEffect(() => {
    if (users.length > 1) return;
    dispatch(fetchUsers(USERS));
  }, [dispatch, users.length]);

  useEffect(() => {
    if (!chats || !chats[userId]) return;
    setFilteredChats(chats);
    setOtherUser(users.find((user) => user.email === chats[userId].emails[0]));
  }, [chats, userId, users]);

  return (
    <HomeContainer>
      <StyledModal
        title="Create conversation"
        visible={showModal}
        footer={null}
        closable
        onCancel={() => setShowModal(false)}
      >
        {users.map((user) => (
          <User
            key={uuidv4()}
            onClick={() => create(user.email)}
            name={user.name}
            phone={user.phone}
          />
        ))}
      </StyledModal>

      <Sidebar>
        <div className="search-container">
          <StyledInput
            color="#8e8e8e"
            placeholder="Search for conversation"
            prefix={<Search size={16} />}
            onChange={handleChange}
          />
        </div>
        <Flex>
          <div>Conversations</div>
          <StyledAdd onClick={() => setShowModal(true)} size={18} />
        </Flex>
        <ConversationConatiner>
          {_.keys(filterdChats).map((chat) => {
            const email = filterdChats[chat].emails[0];
            const user = users.find((usr) => usr.email === email);
            return (
              <Link key={uuidv4()} to={`chat/${chat}`}>
                <Conversation key={uuidv4()} name={user.name} />
              </Link>
            );
          })}
        </ConversationConatiner>
      </Sidebar>
      <ChatContainer>
        {chats && chats[userId] && otherUser && (
          <ChatHeader>
            <Avatar
              style={{ backgroundColor: "#5ac8fa", fontSize: "14x" }}
              shape="circle"
              size={28}
            >
              {otherUser.name[0]}
            </Avatar>
            <Row align="middle" justify="center">
              {otherUser.name}
            </Row>
          </ChatHeader>
        )}
        <Outlet />
      </ChatContainer>
    </HomeContainer>
  );
};

export default Home;
