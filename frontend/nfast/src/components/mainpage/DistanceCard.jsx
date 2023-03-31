import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import StorefrontIcon from "@mui/icons-material/Storefront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import { mainAction } from "../../redux/actions/mainAction";

export default function DistanceCard() {
  const dispatch = useDispatch();
  const getDistance = () => {
    dispatch(mainAction.getDistance());
  };

  useEffect(() => {
    getDistance();
  }, []);

  const distanceList = useSelector((state) => state.mainReducer.stores);

  return (
    <div style={{ marginTop: 30 }}>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handlePrev}>{"<"}</Button>
        <Button onClick={handleNext}>{">"}</Button>
      </div> */}
      <Grid container spacing={3}>
        {distanceList.map((card) => (
          <Grid
            item
            xs={6}
            sm={3} // change to 6 for Galaxy S20 Ultra
            md={3} // change to 6 for Galaxy S20 Ultra
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                width: "100%",
                height: "250px",
              }}
            >
              <Link to={`/store/${card.storeSequence}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.storeImage}
                  alt="random image"
                  sx={{
                    width: "100%",
                    height: "150px",
                  }}
                />
              </Link>
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontSize: 15, marginBottom: 1 }}
                >
                  {/* <StorefrontIcon style={{ color: "purple" }} /> */}
                  {card.storeName}
                </Typography>

                <Typography
                  gutterBottom
                  color="text.secondary"
                  style={{ fontSize: 11, display: "flex" }}
                >
                  <LocationOnIcon style={{ color: "orange", fontSize: 14 }} />
                  {card.storeAddress}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
