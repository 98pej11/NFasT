import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// import StorefrontIcon from "@mui/icons-material/Storefront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
    title: "호호식당 성수",
    description: "서울 성동구 서울숲4길 25",
    imageUrl: img2,
  },
  {
    title: "솔솥 연남",
    description: "서울 마포구 동교로38길 35 지1층 2호, 3호",
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
              <CardContent style={{ padding: 20 }}>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontSize: 15, marginBottom: 2 }}
                >
                  {/* <StorefrontIcon style={{ color: "purple" }} /> */}
                  {card.title}
                </Typography>

                <Typography
                  gutterBottom
                  color="text.secondary"
                  style={{ fontSize: 11, display: "flex" }}
                >
                  <LocationOnIcon style={{ color: "orange", fontSize: 14 }} />
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
