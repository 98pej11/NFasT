import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import reviewTime from "../../assets/Review_time.png";
import reviewParking from "../../assets/Review_parking.png";
import reviewKind from "../../assets/Review_kind.png";
import reviewVeiw from "../../assets/Review_view.png";

const Chips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlignChip = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 0px 5px;
`;

const StyledChip = styled(Chip)`
  padding: 10px;
  width: 150px;
  .MuiChip-label {
    font-size: 11px;
  }
`;

function ReviewButton() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("You clicked the Chip.");
  };

  return (
    <Chips>
      <h4>리뷰</h4>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label="바로 들어갔어요 14"
            onClick={handleClick}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewTime} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label="주차하기 편해요 22"
            onClick={handleClick}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewParking} alt="d" />}
          />
        </Wrapper>
      </AlignChip>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label="친절해요 15"
            onClick={handleClick}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewKind} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label="뷰가 좋아요 23"
            onClick={handleClick}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewVeiw} alt="d" />}
          />
        </Wrapper>
      </AlignChip>
    </Chips>
  );
}

export default ReviewButton;
