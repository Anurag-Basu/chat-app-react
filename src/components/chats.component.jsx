import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { Send } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Message from "./message.component";
import { addMessage } from "../redux/actions/conversations.actions";

const AllChats = styled.div`
  height: calc(100vh - 122px);
  overflow-y: scroll;
  padding: 12px;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #636363;
  }
`;

const ChatInput = styled.div`
  height: 60px;
`;
const StyledInput = styled(Input)`
  height: 100%;
`;

const Chats = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chats);
  const { currentUser } = useSelector((state) => state.users);

  const [currentChat, setCurrentChat] = useState({});
  const [message, setMessage] = useState();

  const handleSend = () => {
    if (!message) return;
    dispatch(addMessage({ message, id: userId, email: currentUser.email }));
    setMessage("");
  };

  useEffect(() => {
    if (!chats || !chats[userId]) return;
    setCurrentChat(chats[userId]);
  }, [chats, userId]);
  console.log({ currentChat });
  return (
    <div>
      {chats && chats[userId] && (
        <>
          <AllChats>
            {currentChat.chats &&
              currentChat.chats.map((chat) => (
                <Message
                  key={uuidv4()}
                  message={chat.message}
                  time={chat.time}
                  className={`${chat.right ? "right" : ""}`}
                />
              ))}
          </AllChats>
          <ChatInput>
            <StyledInput
              suffix={<Send onClick={handleSend} color="#aeaeae" />}
              placeholder="Type your message here"
              bordered={false}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
          </ChatInput>
        </>
      )}
    </div>
  );
};

export default Chats;
