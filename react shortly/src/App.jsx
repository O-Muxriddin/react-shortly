import { useState } from "react";

import "./App.css";
import Header from "./Componest/Header";
import Hero from "./Componest/Hero";
// import Main from "./Componest/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Hero />
      {/* <Main /> */}
    </>
  );
}

export default App;
