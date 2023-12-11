import React from "react";
import * as style from "./Overlap.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import circle from "./rainbow.png";
import swirl from "./swirl.png";

const Overlap = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-50, 50]} translateX={[-40, 20]}>
        <img src={circle} />
      </Parallax>
      <Parallax
        translateY={[-50, 50]}
        translateX={[40, -20]}
        className={style.circleRings}
      >
        <img className={style.swirl} src={swirl} />
      </Parallax>
    </div>
  </div>
);

export default Overlap;
