import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import reviewTime from "../../assets/Review_time.png";
import reviewParking from "../../assets/Review_parking.png";
import reviewKind from "../../assets/Review_kind.png";
import reviewVeiw from "../../assets/Review_view.png";

const Chips = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlignChip = styled.div`
  margin: 10px;
`;
const StyledChip = styled(Chip)`
  margin: 30px;
  padding: 10px;
  width: 140px;
`;

function ReviewButton() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("You clicked the Chip.");
  };

  return (
    <Chips>
      <AlignChip>
        <StyledChip
          label="바로 들어갔어요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
          avatar={<img src={reviewTime} alt="d" />}
        />
        <StyledChip
          label="주차하기 편해요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
          avatar={<img src={reviewParking} alt="d" />}
        />
      </AlignChip>
      <AlignChip>
        <StyledChip
          label="친절해요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
          avatar={<img src={reviewKind} alt="d" />}
        />
        <StyledChip
          label="뷰가 좋아요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
          avatar={<img src={reviewVeiw} alt="d" />}
        />
      </AlignChip>
    </Chips>
  );
}

export default ReviewButton;
