/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import reviewTimer from "../../assets/Review_timer.png";
import reviewParking from "../../assets/Review_parking.png";
import reviewKind from "../../assets/Review_kind.png";
import reviewVeiw from "../../assets/Review_view.png";

function StoreReview(props) {
  // eslint-disable-next-line react/prop-types
  const {
    reviewTime,
    cntTime,
    reviewConvenience,
    cntConvenience,
    reviewService,
    cntService,
    reviewMood,
    cntMood,
  } = props;
  return (
    <Chips>
      <h4>리뷰</h4>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label={`${reviewTime} ${cntTime}`}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewTimer} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label={`${reviewConvenience} ${cntConvenience}`}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewParking} alt="d" />}
          />
        </Wrapper>
      </AlignChip>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label={`${reviewService} ${cntService}`}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewKind} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label={`${reviewMood} ${cntMood}`}
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewVeiw} alt="d" />}
          />
        </Wrapper>
      </AlignChip>
    </Chips>
  );
}

export default StoreReview;
const Chips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AlignChip = styled.div`
  width: 95%;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin: 0px 3px;
`;

const StyledChip = styled(Chip)`
  width: 180px;
  .MuiChip-label {
    font-size: 11px;
  }
`;
