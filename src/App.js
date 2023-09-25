import { useState } from "react";
import Header from './Components/Header';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const App = () => {
  const [ theme, setTheme ] = useState("light");

  const switchThemes = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const icon = theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />

  return (
    <div >
      <Header className={theme}/>
      <button id="themeSwitch" onClick={switchThemes} className={theme}> {icon} </button>
    </div>
  );
}

export default App;
