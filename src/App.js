import { useEffect, useState } from "react";
import Backround from "./Components/Backround/Backround";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  const heroData = [
    { text1: "dive into", text2: "what you love" },
    { text1: "indulge", text2: "your passions" },
    { text1: "give in to", text2: "your passions" },
  ]; 

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false); 

  useEffect(()=> { 
    setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    },5000);
  },[])

  return (
    <div >
      <Backround playStatus={playStatus} heroCount={heroCount} /> 
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount= {heroCount}
      setHeroCount = {setHeroCount}
      playStatus = {playStatus}
      />
    </div>
  );
}

export default App;
