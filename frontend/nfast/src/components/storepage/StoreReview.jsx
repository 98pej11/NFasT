import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import reviewTime from "../../assets/Review_time.png";
import reviewParking from "../../assets/Review_parking.png";
import reviewKind from "../../assets/Review_kind.png";
import reviewVeiw from "../../assets/Review_view.png";
import { storeAction } from "../../redux/actions/storeAction";

function StoreReview() {
  const dispatch = useDispatch();
  const getStoreDetail = () => {
    dispatch(storeAction.getStoreDetail());
  };
  useEffect(() => {
    getStoreDetail();
  }, []);
  const storedetail = useSelector(
    (state) => state.storepageReducer.storedetail
  );
  return (
    <Chips>
      <h4>리뷰</h4>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label={
              storedetail.review.reviewTime[0] +
              storedetail.review.reviewTime[1]
            }
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewTime} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label={
              storedetail.review.reviewConvenience[0] +
              storedetail.review.reviewConvenience[1]
            }
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewParking} alt="d" />}
          />
        </Wrapper>
      </AlignChip>
      <AlignChip>
        <Wrapper>
          <StyledChip
            label={
              storedetail.review.reviewService[0] +
              storedetail.review.reviewService[1]
            }
            deleteIcon={<DoneIcon />}
            variant="outlined"
            avatar={<img src={reviewKind} alt="d" />}
          />
        </Wrapper>
        <Wrapper>
          <StyledChip
            label={
              storedetail.review.reviewMood[0] +
              storedetail.review.reviewMood[1]
            }
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
  align-items: center;
`;

const AlignChip = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 0px 3px;
`;

const StyledChip = styled(Chip)`
  padding: 10px;
  width: 150px;
  .MuiChip-label {
    font-size: 11px;
  }
`;
