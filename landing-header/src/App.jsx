import { useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  let heroData = [
    { text1: "Audi", text2: "R8" },
    { text1: "Tesla", text2: "CyberTruck" },
    { text1: "Nissan", text2: "GTR" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  );
};

export default App;
