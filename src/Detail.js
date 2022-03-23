import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import "bulma/css/bulma.min.css";

const Detail = (props) => {
  const params = useParams();
  const history = useHistory();
  const [rate, setRate] = React.useState();

  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key-1));
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);

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
        className="giphy-embed"
      ></iframe>
      <Loop>
        {Array.from({ length: 5 }, (v, i) => {
          return (
            <Star
              key = {i}
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
  border: 1px solid rgb(218, 247, 166);
  border-radius: 10px;
  background: rgb(218, 247, 166);
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
