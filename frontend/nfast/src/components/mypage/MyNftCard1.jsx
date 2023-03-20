import * as React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
// import DoneIcon from "@mui/icons-material/Done";
import PaidIcon from "@mui/icons-material/Paid";
import QRcode from "../../assets/QRcode.png";

function MyNftCard1() {
  const NFT1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  `;
  const StyledChip = styled(Chip)`
    margin: 30px;
    padding: 10px;
    width: 100px;
  `;
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("You clicked the Chip.");
  };
  return (
    <div>
      <NFT1>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            borderRadius: 7,
            border: "solid 3px #ABA1A1",
            backgroundColor: "#FFDB7E",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                2023.03.13
              </Typography>
              <Typography component="div" variant="h5">
                연돈
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                30.143 Eth
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <StyledChip
                style={{ backgroundColor: "white" }}
                icon={<PaidIcon />}
                label="판매하기"
                onClick={handleClick}
                //   deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={{
                  paddingLeft: 8,
                  fontSize: 1,
                  textDecoration: "underline",
                }}
              >
                환불하기
              </Typography>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, float: "right", padding: 1.5 }}
            image={QRcode}
            alt="Live from space album cover"
          />
        </Card>
      </NFT1>
    </div>
  );
}
export default MyNftCard1;
