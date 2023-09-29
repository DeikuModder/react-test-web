import Header from './Components/Header';
import MainSections from "./Components/mainSections";
import Footer from './Components/Footer';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useLocalStorage } from "./useLocalStorage";


const App = () => {
  const [ theme, setTheme ] = useLocalStorage('theme', 'light');

  const switchThemes = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const icon = theme === 'light' ? <BsFillSunFill id="iconMode"/> : <BsFillMoonFill id="iconMode"/>

  return (
    <div >
      <Header className={theme}/>
      <MainSections className={theme}/>
      <button id="themeSwitch" onClick={switchThemes} className={theme}> {icon} </button>
      <Footer />
    </div>
  );
}

export default App;
