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
    description: "제주 서귀포시 일주서로 968-10",
    imageUrl: img1,
  },
  {
    title: "호호식당",
    description: "맛있는 가정식을 호호 불어먹어요",
    imageUrl: img2,
  },
  {
    title: "솔솥",
    description: "원하는 토핑을 얹은 솥밥을 솔솔 비벼목어용",
    imageUrl: img3,
  },
];

export default function MainCard() {
  return (
    <div style={{ marginTop: 30 }}>
      <Grid container spacing={7}>
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
            <Card
              sx={{
                width: "100%",
                height: "300px",
              }}
            >
              <Link to="/store">
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
              </Link>
              <CardContent>
                <Typography
                  gutterBottom
                  fontSize="20"
                  component="div"
                  sx={{ textDecoration: "none" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize="9"
                  color="text.secondary"
                  sx={{ textDecoration: "none" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
