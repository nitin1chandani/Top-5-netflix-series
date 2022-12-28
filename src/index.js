import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import sdata from "./sdata";
console.log(sdata);
ReactDOM.render(
  <>
    <h1 className="heading">List of top 5 Web Series in 2022</h1>
    <Card
      imgsrc={sdata[0].imgsrc}
      link={sdata[0].link}
      sname={sdata[0].sname}
      title={sdata[0].title}
    />
    <Card
      imgsrc={sdata[1].imgsrc}
      link={sdata[1].link}
      sname={sdata[1].sname}
      title={sdata[1].title}
    />
    <Card
      imgsrc={sdata[2].imgsrc}
      link={sdata[2].link}
      sname={sdata[2].sname}
      title={sdata[2].title}
    />
    <Card
      imgsrc={sdata[3].imgsrc}
      link={sdata[3].link}
      sname={sdata[3].sname}
      title={sdata[3].title}
    />
    <Card
      imgsrc={sdata[4].imgsrc}
      link={sdata[4].link}
      sname={sdata[4].sname}
      title={sdata[4].title}
    />
  </>,
  document.getElementById("root")
);
