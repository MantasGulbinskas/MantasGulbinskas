import { Hero } from "./containers/Hero";
import Home from "./containers/Home";
import {WorkServices} from "./containers/WorkServices";
import AboutService from "./containers/AboutService";
import ServiceDo from "./containers/ServiceDo";
import {Testimonial} from "./containers/Testimonial";
import {Footer} from "./containers/Footer";
function App() {
  return (
    <>
      <Home />
      <Hero />
        <WorkServices />
        <AboutService />
        <ServiceDo />
        <Testimonial />
        <Footer />
    </>
  );
}

export default App;
