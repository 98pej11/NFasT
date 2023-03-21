import * as React from "react";
import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function PublishInput() {
  return (
    <Input>
      <div>
        <div>날짜</div>
      </div>
      <div>런치 디너</div>
      <div>수량</div>
      <div>가격</div>
    </Input>
  );
}

export default PublishInput;
