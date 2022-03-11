import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const StyledRow = styled(Row)`
  margin-bottom: 12px;
  width: 60%;
  float: left;
  border: 1px solid #c7c7c7;
  padding: 4px 8px;

  &.right {
    float: right;
  }
`;

const Message = ({ message, time, className }) => {
  return (
    <StyledRow className={className}>
      <Col span={18}>{message}</Col>
      <Col span={6}>{time}</Col>
    </StyledRow>
  );
};

export default Message;
