import { Hero } from "./containers/Hero";
import Home from "./containers/Home";
import "./responsive.css";
import {WorkServices} from "./containers/WorkServices";
import AboutService from "./containers/AboutService";
function App() {
  return (
    <>
      <Home />
      <Hero />
        <WorkServices />
        <AboutService />
    </>
  );
}

export default App;
