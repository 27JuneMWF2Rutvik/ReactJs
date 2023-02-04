import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import './theme.css' ;

const ThemeContext = createContext("light");

const UseContextExample = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
        <ThemeContext.Provider value={theme}>
            <Form />
        </ThemeContext.Provider>
        <button onClick={() => { 
            setTheme(theme === "dark" ? "light" : "dark")
        }}>Toggle theme</button>
    </>
  );
};

function Form({ children }) {
    return (
        <Panel title="Welcome">
            <button>Sign up</button>
            <button>Log in</button>
        </Panel>
    );
  }

//   function Panel({ title, children }) {
//   function Panel({ title, children }) {
  function Panel(props) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{props.title}</h1>
        {props.children}
      </section>
    )
  }

export default UseContextExample;
