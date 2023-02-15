import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Experties } from "./components/Experties/Experties";
import css from '../src/styles/app.module.scss';
import { Works } from "./components/Works/Works";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Works/>
    </div>
  );
};

export default App;
