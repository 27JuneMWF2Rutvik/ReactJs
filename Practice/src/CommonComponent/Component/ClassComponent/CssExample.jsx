import React, { Component } from "react";
import styledCmponents from "styled-components";
import "./custom.css";

class CssExample extends Component {
  render() {
    const custCSS = {
      color: "blue",
      background: "orange", 
    };
    const Wrapper = styledCmponents.section`
                        padding: 4em;
                        backgroung: papayahwip;
                        `;
    const Btn = styledCmponents.button`
                    color: green;
                    font-size: 1em;
                    margin: 0.25em 1em;
                    border: 2px solid palevioletred;
                    border-redius: 3px;
                    `;
    const txtc = {
      color: "blue",
      background: "yellow",
    };
    const txts = {
      fontSize: "80px",
    };

    return (
      <>
        <p style={custCSS}>test</p>
        <p style={{ color: "blue", backgroundColor: "orange" }}>test</p>
        <h2>Something</h2>
        <Btn>test</Btn>
        <Wrapper>data</Wrapper>
        <h1 style={{ ...txtc, ...txts }}>Hello App</h1>
        <h1 style={{ color: "blue", background: "yellow", fontSize: "80px" }}>
          Hello App
        </h1>
      </>
    );
  }
}

export default CssExample;
