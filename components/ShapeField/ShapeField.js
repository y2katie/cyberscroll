import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import { Svg } from "../";

import * as style from "./ShapeField.module.scss";

import cluster01HemiLeft from "bundle-text:./cluster-01-hemi-left.svg";
import cluster01HemiRight from "bundle-text:./cluster-01-hemi-right.svg";
import cluster01Rect from "bundle-text:./cluster-01-rect.svg";

import cluster02Hemi from "bundle-text:./cluster-02-hemi.svg";
import cluster02TriangleBig from "bundle-text:./cluster-02-triangle-big.svg";
import cluster02TriangleSmall from "bundle-text:./cluster-02-triangle-small.svg";

import cluster03TriangleTop from "bundle-text:./cluster-03-triangle-top.svg";
import cluster03TriangleBottom from "bundle-text:./cluster-03-triangle-bottom.svg";
import cluster03TriangleBig from "bundle-text:./cluster-03-triangle-big.svg";

import cluster04Triangle from "bundle-text:./cluster-04-triangle.svg";
import cluster04Square from "bundle-text:./cluster-04-square.svg";
import cluster04HemiRight from "bundle-text:./cluster-04-hemi-right.svg";

import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import f from "./f.png";
import g from "./g.png";
import h from "./h.png";
import i from "./i.png";







export default class ShapeField extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.shapeCluster01}>
          <Parallax
            translateY={[100, -100]}
            className={style.hemiLeft}
            slowerScrollRate
          >
            <img src={a} />
          </Parallax>
          <img src={b} />
          <Parallax translateY={[-100, 100]} className={style.hemiRight}>
            <img src={c} />
          </Parallax>
        </div>

        <div className={style.shapeCluster02}>
        <img src={d} />
          <Parallax translateY={[-30, 30]} className={style.triangleBig}>
          <img src={e} />
          </Parallax>
          <Parallax translateY={[30, -30]} className={style.triangleSmall}>
          <img src={f} />
          </Parallax>
        </div>

        <div className={style.shapeCluster03}>
          <Parallax translateY={[60, -20]} className={style.triangleTop}>
          <img src={g} />
          </Parallax>

          <img src={c} className={style.triangleTop} />
          <Parallax translateY={[-60, 60]} className={style.triangleBig}>
          <img src={h} />
          </Parallax>
        </div>

        <div className={style.shapeCluster04}>
          <img src={d} className={style.square} />
          <Parallax translateY={[-60, 60]} className={style.triangle}>
            <img src={i} />
          </Parallax>
          <Parallax translateY={[-30, 30]} className={style.hemiRight}>
          <img src={a} />
          </Parallax>
        </div>

        <div className={style.shapeCluster05}>
          <Parallax
            translateY={[100, -100]}
            className={style.hemiLeft}
            slowerScrollRate
          >
            <img src={a} />
          </Parallax>
          <img src={a} />
          <Parallax translateY={[-100, 100]} className={style.hemiRight}>
            <img src={c} />
          </Parallax>
        </div>


        <div className={style.shapeCluster06}>
        <img src={d} />
        
          <Parallax translateY={[90, -30]} className={style.triangleSmall}>
          <img src={f} />
          </Parallax>
          <Parallax translateY={[-90, 90]} className={style.triangleBig}>
          <img src={b} />
          </Parallax>
        </div>

      </div>

    );
  }
}
