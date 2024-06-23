import "./App.css";
import LogoImage from "./components/LogoImage";
import LearnReact from "./components/LearnReact";
import LearnText from "./components/LearnText";
import BackgroundImage from "./components/BackgroundImage";

import { useState } from "react";

function App() {
  const [myNumber, setMyNumber] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <LogoImage />
        <BackgroundImage />
        <LearnText />
        <LearnReact />
        <button onClick={() => setMyNumber(myNumber + 1)}>Increment</button>
        <p>{myNumber}</p>
      </header>
    </div>
  );
}

export default App;
