import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import "bulma/css/bulma.min.css";

const Detail = (props) => {
  const params = useParams();
  const history = useHistory();
  const [circle, circle_change] = React.useState([0, 1, 2, 3, 4]);
  const [rate, setRate] = React.useState();

  return (
    <Whole>
      <h1>
        <Day>{params.week_day}요일</Day>
        <br />
        평점남기기
      </h1>
      <iframe
        src="https://giphy.com/embed/OsOP6zRwxrnji"
        width="300"
        height="380"
        class="giphy-embed"
      ></iframe>
      <Loop>
        {circle.map((v, i) => {
          return (
            <Star
              onClick={() => {
                setRate(i);
              }}
            >
              {i <= rate ? "🟢" : "⚪"}
            </Star>
          );
        })}
      </Loop>

      <button
        className="button is-primary"
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </button>
    </Whole>
  );
};

const Whole = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  button {
    width: 40%;
    height: 15%;
    margin: 20px auto;
  }
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;

const Day = styled.span`
  border: 1px solid orange;
  border-radius: 10px;
  background: orange;
  font-size: 30px;
  color: white;
`;

const Star = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

const Loop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Detail;
