import styled from "styled-components";
import { Input, Modal } from "antd";
import { PlusCircle } from "react-feather";

export const HomeContainer = styled.div`
  padding: 0 24px;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Sidebar = styled.div`
  width: 25%;
  border-right: 1px solid #c7c7c7;
  padding: 12px;
  background-color: white;
`;

export const ChatContainer = styled.div`
  width: 75%;
  background-color: white;
`;

export const StyledInput = styled(Input)`
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const StyledAdd = styled(PlusCircle)`
  cursor: pointer;
  color: #8e8e8e;

  &:hover {
    color: black;
  }
`;

export const ChatHeader = styled.div`
  padding: 12px;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
  .ant-row {
    width: 100%;
  }
`;

export const ConversationConatiner = styled.div`
  height: calc(100vh - 100px);
  overflow-y: scroll;
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

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    max-height: 300px;
    overflow-y: scroll;
  }
`;
