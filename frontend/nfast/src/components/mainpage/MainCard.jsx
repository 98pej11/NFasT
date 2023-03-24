import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import img1 from "../../assets/연돈.png";
import img2 from "../../assets/호호식당.jpg";
import img3 from "../../assets/솔솥.png";

const cards = [
  {
    title: "연돈",
    description: "This is the description of card 1",
    imageUrl: img1,
  },
  {
    title: "호호식당",
    description: "This is the description of card 2",
    imageUrl: img2,
  },
  {
    title: "솔솥",
    description: "This is the description of card 3",
    imageUrl: img3,
  },
];

export default function MainCard() {
  return (
    <div style={{ marginTop: 30 }}>
      <Grid container>
        {cards.map((card) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/store">
              <Card
                sx={{
                  width: "100%",
                  height: "300px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.imageUrl}
                  alt="random image"
                  sx={{
                    width: "100%",
                    height: "200px",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize="large"
                    component="div"
                    sx={{ textDecoration: "none" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    fontSize="medium"
                    color="text.secondary"
                    sx={{ textDecoration: "none" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
