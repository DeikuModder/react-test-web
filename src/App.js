import { useState } from "react";
import Header from './Components/Header';
import MainSections from "./Components/mainSections";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const App = () => {
  const [ theme, setTheme ] = useState("light");

  const switchThemes = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const icon = theme === 'light' ? <BsFillSunFill id="iconMode"/> : <BsFillMoonFill id="iconMode"/>

  return (
    <div >
      <Header className={theme}/>
      <MainSections className={theme}/>
      <button id="themeSwitch" onClick={switchThemes} className={theme}> {icon} </button>
    </div>
  );
}

export default App;
