import React from "react";
import "./Styles/App.css";
import Tables from "./Components/Tables";
import Head from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <div>
        <Head/>
        <Tables />
      </div>
      <Footer />
    </div>
  );
}

export default App;
