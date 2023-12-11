import React from "react";
import * as style from "./TriangleGrid.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import gridPurple from "bundle-text:./grid-purple.svg";
import gridWhite from "bundle-text:./grid-white.svg";
import angleTop from "bundle-text:../shared/angle-dark-top.svg";
import dots from "./dots.png";


const TriangleGrid = () => (
  <main className={style.root}>
    <img src={dots} className={style.angleTop} />
    <article className={style.copy}>
      <h1 className={style.headline}>Chronicles the Absurdity of Life in the Most Mundane Situations</h1>
      <p>
        Thoughts on <b>Cybersecurity</b>
      </p>
      <p>
        Thoughts on <b> Web Design</b>
       
      </p>
      <p>
        Thoughts on <b> Apps Ive Made</b>
       
      </p>
      <p>
        Thoughts on <b> Food</b>
       
      </p>
      <p>
        Thoughts on <b> Travel</b>
       
      </p>
    
      <p>
        <a className="btn" href="https://www.linkedin.com/in/y2katie/">
          Linkedin
        </a>
        <a
          className="btn"
          href="mailto:kj0203@gmail.com"
        >
          Contact Me
        </a>
        <a
          className="btn"
          href="https://github.com/y2katie"
        >
Github        </a>
      </p>
    </article>
    <div className={style.container}>
      <Parallax translateY={[-25, 25]}>
        <Svg svg={gridPurple} className={style.trianglesPurple} />
      </Parallax>
      <Parallax translateX={[-13, 13]} translateY={[-50, 50]}>
        <Svg svg={gridWhite} />
      </Parallax>
    </div>
  </main>
);

export default TriangleGrid;
