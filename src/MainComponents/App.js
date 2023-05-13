import './App.css'; 
import {useState, useEffect, useReducer} from "react";
import Header from "./Header";
import TheFlags from "../flagsData/TheFlags.js";
import GeneralInfo from "./GeneralData/GeneralInfo";

function App() {

  const [worldsData, setWorldsData] = useState([]);
  const [indexNu, dispatch] = useReducer(toggleFlags, 0);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://restcountries.com/v3.1/all?");
      const jsonRes = await response.json();
      setWorldsData(jsonRes);
    }
    getData();
  }, []);

  function toggleFlags(state, action) {
    switch (action.type) {
      case "Next":
        return (state === worldsData.length - 1) ? 0 : state + 1; 
      case "Previous":
        return (state === 0) ? worldsData.length - 1 : state - 1;  
      default:
        return state;
    }
  }

  const theWorldsData = worldsData[indexNu];

  return (
    <div>
      <Header />
      {theWorldsData && 
      <main>
      <TheFlags name={theWorldsData.name.common} official={theWorldsData.name.official} 
      svg={theWorldsData.flags.svg} discription={theWorldsData.flags.alt} 
      dispatch={dispatch} />
      <GeneralInfo population={theWorldsData.population} capital={theWorldsData.capital} 
      continent={theWorldsData.continents} timezone={theWorldsData.timezones} map={theWorldsData.maps.googleMaps} 
      subregion={theWorldsData.subregion} />
      </main>
      }
      </div>
  );
}

export default App;
