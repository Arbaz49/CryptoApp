import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../Config/api.js";

const Carousel = () => {
  const [tredingCoins, settrendingCoins] = useState([]);
  const getTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    settrendingCoins(data);
  };
  useEffect(() => {
    getTrendingCoins();
  }, []);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const items = tredingCoins.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <div className="caouselItem">
        <img
          src={coin?.image}
          height="80"
          style={{ marginBottom: "10px" }}
          alt={coin?.image}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          rs {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
