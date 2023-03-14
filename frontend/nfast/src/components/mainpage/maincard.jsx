import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cards = [
  {
    title: "Card 1",
    description: "This is the description of card 1",
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "Card 2",
    description: "This is the description of card 2",
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    title: "Card 3",
    description: "This is the description of card 3",
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
];

function MainCard() {
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
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
        </Grid>
      ))}
    </Grid>
  );
}

export default MainCard;
