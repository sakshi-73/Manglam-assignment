import "./App.css";
import React from "react";
import HomeContainer from "./containers/HomeContainer";
import MidParaContainer from "./containers/MidParaContainer";
import LastParaContainer from "./containers/LastParaContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <MidParaContainer />
      <LastParaContainer />
    </div>
  );
}

export default App;
