import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Experties } from "./components/Experties/Experties";
import css from '../src/styles/app.module.scss';
import { Works } from "./components/Works/Works";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { People } from "./components/People/People";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  //don't forget to add font link in index.html

  const scrollEventHandler = function()
  {
    window.scroll(0, window.pageYOffset)
  }
  
  window.addEventListener("scroll", scrollEventHandler, false);

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Works/>
      <Portfolio/>
      <People/>
      <Footer/>
    </div>
  );
};

export default App;
