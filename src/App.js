import React from "react";
import styled from "styled-components";
import { Route} from "react-router-dom";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Home from "./Home";
import Detail from "./Detail";

function App() {

  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:week_day" exact>
          <Detail />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
