import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClassCompoMenu extends Component {

  render() {
    return (
         <>
            <ul>
                <li><Link to="classcompointro">Class Compo Intro</Link></li>
                <li><Link to="jsxclasscompo">JSX</Link></li>
                <li><Link to="propsInclass">Props</Link></li>
                <li><Link to="stateinclass">State</Link></li>
                <li><Link to="statelifecycleinclass">State LifeCycle</Link></li>
                <li><Link to="conditionalrendering">Conditional Rendering</Link></li>
                <li><Link to="listandkeys">Lists & Keys</Link></li>
                <li><Link to="controlledCompo">Controlled Compo</Link></li>
                <li><Link to="unControlledCompo">UnControlled Compo</Link></li>
                <li><Link to="spreadvsrestcompo">Spread Vs Rest Compo</Link></li>
                <li><Link to="compositionvsinheritance">Composition Vs Inheritance</Link></li>
                <li><Link to="arraymap">Access Array Via Map</Link></li>
            </ul>
            <Outlet></Outlet>


        </>
    );
  }
}
export default ClassCompoMenu;