import React from "react";
import { data } from "./data";
import AnimationSvg from "svg-scroll-animation";
import "svg-scroll-animation/dist/index.css";


const App = () => {
  return <AnimationSvg data={data} height={"1000vh"} />;

};

export default App;
