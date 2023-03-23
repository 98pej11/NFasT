import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        // bgcolor: "#EAEAED",
        bgcolor: "#C7C5EC",
        py: 3,
        padding: 2,
        borderTop: "1px solid #DDDCDC",
        width: "100%",
        height: "150px",
      }}
    >
      <Container fullWidth>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "black", textAlign: "center", mb: 2 }}
        >
          Footer
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "common.white", mb: 1 }}
        >
          © {new Date().getFullYear()} Copyright ⓒ 2023 by A307 왕자공쥬들
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "common.white", mb: 1 }}
        >
          {/* <Link href="#" color="inherit"> */}
          all rights reserved.
          {/* </Link> */}
          {" | "}
          {/* <Link href="#" color="inherit"> */}
          Terms of Service
          {/* </Link> */}
        </Typography>
      </Container>
    </Box>
  );
}
