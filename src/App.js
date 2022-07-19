import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import Contact from "./components/Contact us/Contact";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

const App = () => {
    alert("Note : This site not Fully responsive");
    return (
        <div className='app'>
            <Home />
            <About />
            <Service />
            <Slider />
            <Pricing />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
