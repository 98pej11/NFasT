import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MainComp from "../../components/mainpage/MainComp";
import SearchBar from "../../components/commons/SearchBar";
import mainImg from "../../assets/mainimg.jpg";
import Header from "../../components/commons/Header";

function MainPage() {
  return (
    <div>
      <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${mainImg})`,
          backgroundColor: "#FFF3D3",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Header />
        <Container>
          {/* <Grid container item xs={12} lg={7} justifyContent="center" mx="auto"> */}
          <Typography variant="h4" color="white" mb={1} align="center">
            줄서지 말고 먹자{" "}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            align="center"
            // px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            NFasT를 통해 더욱 빠른 서비스를 이용해보세요!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SearchBar />
          </Box>
          {/* </Grid> */}
        </Container>
      </Box>
      <MainComp />
    </div>
  );
}

export default MainPage;
