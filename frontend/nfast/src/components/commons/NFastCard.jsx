import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardImg from "../../assets/NFast_Card.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;
const Card = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 280px;
  right: -250px;
`;
const Img = styled.img`
  position: absolute;
`;
const TopText = styled.div`
  position: relative;
  color: lightCyan;
  top: 20px;
  left: 10px;
`;
const BottomText = styled(TopText)`
  position: relative;
  top: 150px;
  left: 100px;
`;
function NFastCard({ name, date, price }) {
  return (
    <Wrapper>
      <Card>
        <Img src={CardImg} alt="car!" />
        <TopText>
          <h2>{name}</h2>
          <h3>{date}</h3>
        </TopText>
        <BottomText>
          <button type="button">확인</button>
          <div>{price} Eth</div>
        </BottomText>
      </Card>
    </Wrapper>
  );
}
NFastCard.defaultProps = {
  name: "가게이름",
  date: "날짜",
  price: 0,
};
NFastCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
};
export default NFastCard;
