import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MainComp from "../../components/mainpage/MainComp";

function MainPage() {
  return (
    <div>
      <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: "url(../../assets/연돈.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <Typography variant="h1" color="black" mt={-6} mb={1}>
              Material Kit 2 React{" "}
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join
              over 1.6 million developers around the world.
            </Typography>
          </Grid>
        </Container>
      </Box>
      <MainComp />
    </div>
  );
}

export default MainPage;
