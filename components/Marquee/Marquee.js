import React from "react";
import * as style from "./Marquee.module.scss";
import { Svg } from "../";
import { Parallax } from "react-scroll-parallax";
import boxBg from "bundle-text:./box-bg.svg";
import boxOutline from "./rainbow.png";
import divider from "./c.png";
import h from "./h.png";


const Marquee = () => (
  <div className={style.root}>
    <img src={divider} className={style.divider} />
    <div className={style.container}>
      <img src={h} className={style.boxBg} />
      <Parallax
        className={style.text}
        translateY={[-70, 70]}
        translateX={[30, -30]}
      >
        <span className="h1">All thoughts are my own</span>
      </Parallax>
      <Parallax className={style.boxOutline} translateY={[-35, 35]}>
        <img src={boxOutline} />
      </Parallax>
    </div>
  </div>
);

export default Marquee;
