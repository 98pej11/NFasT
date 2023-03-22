import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import img1 from "../../assets/연돈.png";
import img2 from "../../assets/호호식당.jpg";
import img3 from "../../assets/솔솥.png";

const cards = [
  {
    title: "Card 1",
    description: "This is the description of card 1",
    imageUrl: img1,
  },
  {
    title: "Card 2",
    description: "This is the description of card 2",
    imageUrl: img2,
  },
  {
    title: "Card 3",
    description: "This is the description of card 3",
    imageUrl: img3,
  },
];

function MainCard() {
  return (
    <Grid container spacing={2}>
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
                maxWidth: 345,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.imageUrl}
                alt="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainCard;
