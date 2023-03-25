import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContainer">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography>get all information about your favorite crypto currency</Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
};

export default Banner;
