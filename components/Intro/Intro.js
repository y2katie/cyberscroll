import React from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./Intro.module.scss";
import { Svg } from "../";
import ring from "./me.png";
import dots from "./plants.png";
import swirl from "./couch.png";



const Intro = () => (
  
  <div className={style.root}>

    <div className={style.container}>
      <Parallax translateY={[100, -20]} className={style.ring}>
        <img src={ring} />
      </Parallax>
      <Parallax translateY={[50, -50]} className={style.circle}>
        <div className={style.parallaxInner}>
            <img src={swirl} className={style.circleInner} />
        </div>
      </Parallax>
      
      <img className={style.hemispheres} src={dots} />
    </div>

    <h2 className={style.scroll}>Hi, I'm Katie. </h2>
  </div>
);

export default Intro;
