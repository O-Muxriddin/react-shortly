import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Componest/Header";
import Main from "./Componest/Main";
import Hero from "./Componest/Hero";
import Cta from "./Componest/Cta";
import Footer from "./Componest/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Main />
      <Cta />
      <Footer />s
    </>
  );
}

export default App;
