import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { IoLogInOutline } from "react-icons/io5";
const Home = (props) => {
  let history = useHistory();

  const week_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  const week_days = Object.keys(week_dict).map((_d, idx) => {
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return week_dict[d];
  });

  const week_rates = week_days.map((w, idx) => {
    return {
      day: w,
      rate: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    };
  });

  return (
    <div>
      <Title>내 일주일은?</Title>
      <iframe
        src="https://giphy.com/embed/1MTLxzwvOnvmE"
        width="315"
        height="170"
        className="giphy-embed"
      ></iframe>
      <Line />
      {week_rates.map((w, idx) => {
        return (
          <div
            key={`week_day_${idx}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: "0 0.5rem 0 0",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {w.day}
            </p>
            <Rating>{"🟢".repeat(w.rate) + "⚪".repeat(5 - w.rate)}</Rating>

            <IoLogInOutline
              style={{
                margin: "0 0 0 0.5rem",
                fontSize: "30px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push(`/detail/${w.day}`);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const Title = styled.h1`
  color: rgb(159, 226, 191);
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Rating = styled.div`
  font-size: 25px;
`;

export default Home;
