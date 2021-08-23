import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Fontawesome from "font-awesome/css/font-awesome.css";
import Works from "./Components/_Works/Works";
import _Works from "./Components/Works/Works";
import TopBar from "./Components/topbar/TopBar";
import BottomBar from "./Components/bottomBar/BottomBar";
import Intro from "./Components/Intro/Intro";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Menu from "./Components/Menu/Menu";
import "./App.scss";
import { useState } from "react";

/*
===============================
=========== the body ==========
===============================
*/
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <_Works /> */}
        <Testimonials />
        <Contact />
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
