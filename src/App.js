import { Hero } from "./containers/Hero";
import Home from "./containers/Home";
import "./responsive.css";
import {WorkServices} from "./containers/WorkServices";
function App() {
  return (
    <>
      <Home />
      <Hero />
        <WorkServices />
    </>
  );
}

export default App;
