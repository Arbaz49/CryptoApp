import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../Config/api";
import { Line } from "react-chartjs-2";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import SelectButton from "./SelectButton";
import { chartDays } from "../Config/buttonsData";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const CoinInfo = ({ coin }) => {
  const [historicaldata, sethistoricaldata] = useState([]);
  const [days, setdays] = useState(1);
  const [flag,setflag] = useState(false);

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin?.id, days));
    sethistoricaldata(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days,coin]);
  return (
    <div className="ContainerChart">
      {!historicaldata ? (
        <CircularProgress style={{ color: "gold" }} thickness={2} size={250} />
      ) : (
        <>
            <Line
              data={{
                labels: historicaldata.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicaldata.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in inr`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
                <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setdays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
        </>
      )}
    </div>
  );
};

export default CoinInfo;
