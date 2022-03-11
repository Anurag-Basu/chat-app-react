import { Avatar, Row } from "antd";
import React from "react";
import styled from "styled-components";

const UserContainer = styled(Row)`
  padding: 12px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #484848;
  margin-bottom: 8px;

  &:hover {
    background-color: #ccdef2;
    cursor: pointer;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 12px;
  background-color: #5ac8fa;
`;

const UserName = styled.span`
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
`;
const Users = ({ name, phone, onClick }) => {
  return (
    <UserContainer onClick={onClick}>
      <StyledAvatar>{name?.[0]}</StyledAvatar>
      <Row>
        <UserName>{name}</UserName>
        <UserName>{phone}</UserName>
      </Row>
    </UserContainer>
  );
};

export default Users;
