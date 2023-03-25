import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/CoinInfo";
import { SingleCoin } from "../Config/api";
import parse from "html-react-parser";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();
  const getCoinDetails = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
    console.log(data);
  };
  useEffect(() => {
    getCoinDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="coinContainer">
      <div className="sidebar">
        <img
          src={coin?.image?.large}
          alt={coin?.image?.small}
          style={{ height: "200px", marginBottom: "20px" }}
        />
        <Typography
          variant="h3"
          style={{
            marginBottom: "20px",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          style={{
            width: "100%",
            padding: "25px",
            paddingBottom: "15px",
            paddingTop: "0px",
            textAlign: "justify",
          }}
        >
          {parse(`${coin?.description?.en.split(". ")[0]}`)}.
        </Typography>
        <div className="marketdata">
          <span style={{ display: "flex" }}>
            <Typography>Rank :</Typography> &nbsp;&nbsp;{" "}
            <Typography>{coin?.market_cap_rank}</Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography>Current Price :</Typography> &nbsp;&nbsp;{" "}
            <Typography>RS {coin?.market_data?.current_price.inr}</Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography>Market Cap :</Typography> &nbsp;&nbsp;{" "}
            <Typography>RS {coin?.market_data?.market_cap.inr}</Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
