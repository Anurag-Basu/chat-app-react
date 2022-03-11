import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import styled from "styled-components";

// css for card
const StyledCard = styled(Card)`
  border: none;
  transition: all 0.3s;
  height: 80px;
  .ant-card-body {
    width: 100%;
    height: 100%;
    padding: 8px 12px;
    & > .ant-row {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    background-color: #ccdef2;
    cursor: pointer;
  }
`;

// css for Avatar

const StyledAvatar = styled(Avatar)`
  margin-right: 12px;
  background-color: #5ac8fa;
`;

//css for username
const UserName = styled.span`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
`;

const Conversation = ({ name = "User", message }) => {
  return (
    <StyledCard>
      <Row justify="space-between" align="middle">
        <Row>
          <StyledAvatar shape="circle" size={40}>
            {name[0]}
          </StyledAvatar>
          <Col className="message-container">
            <div className="name">
              <UserName level={5}>{name}</UserName>
            </div>
            <div className="message">{message}</div>
          </Col>
        </Row>
        <Col>8:09</Col>
      </Row>
    </StyledCard>
  );
};

export default Conversation;
