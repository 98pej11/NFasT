import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import styled, { keyframes } from "styled-components";
import SwitchTimeStore from "./SwitchTimeStore";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div`
  padding-top: 0px;
  background-color: white;
  position: fixed;
  bottom: 56px; // Height of the BottomNavigation component
  left: 0;
  right: 0;
  height: calc(100% - 56px); // Height of the BottomNavigation component
  animation: ${slideUpAnimation} 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 50px;
    width: 100%;
    height: 100px;
    background-color: #bcb6ff;
    color: white;
  }
`;

function CalendarList() {
  const [value, setValue] = useState(new Date());
  const [showButtons, setShowButtons] = useState(false);
  // const [mealData, setMealData] = useState(null);

  const handleDayClick = (date) => {
    setValue(date);
    setShowButtons(true); // 한 번만 눌러서 버튼이 나오도록 수정
  };

  // const handleMealChoice = (meal) => {
  //   setShowButtons(false);
  //   // 여기서 API 호출이나 데이터를 가져오는 로직을 구현할 수 있습니다.
  //   // 예를 들어, 밑에 있는 코드를 사용할 수 있습니다.
  //   const data = {
  //     lunch: "치킨",
  //     dinner: "피자",
  //   };
  //   setMealData(data[meal]);
  // };

  return (
    <Wrapper>
      <h2>구매하기</h2>
      <Calendar onClickDay={handleDayClick} value={value} />
      {showButtons && <SwitchTimeStore />}
      {/* {mealData && <p>선택한 식사: {mealData}</p>} */}
    </Wrapper>
  );
}

export default CalendarList;
