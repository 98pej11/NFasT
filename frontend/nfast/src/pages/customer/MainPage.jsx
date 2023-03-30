import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import MainComp from "../../components/mainpage/MainComp";
import { getSequence } from "../../storage/Cookie";
import { mypageAction } from "../../redux/actions/mypageAction";

// export class Token {
//   #accessToken = "";

//   getAccessToken() {
//     return this.#accessToken;
//   }

//   setAccessToken(token) {
//     this.#accessToken = token;
//   }
// }

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageAction.getUserInfo(getSequence()));
  }, []);

  return (
    <div>
      <Box
        minHeight="10vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${mainImg})`,
          // backgroundColor: "#FFF3D3",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* <Container>
          <Typography fontSize={2} color="black" align="center">
            줄서지 말고 먹자{" "}
          </Typography>
          <Typography variant="body1" color="black" align="center" mt={1}>
            NFasT를 통해 더욱 빠른 서비스를 이용해보세요!
          </Typography>
        </Container> */}
      </Box>
      <MainComp />
    </div>
  );
}

export default MainPage;
