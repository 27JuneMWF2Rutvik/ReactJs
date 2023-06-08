import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import FunctionalCompoMenu from "./FunctionalCompoMenu";
import Clock from "./Clock";
import FunctionalCompoExample from "./FunctionalCompo.jsx";
import StateExampleFunctionalCompo from "./StateExampleFunctionalCompo.jsx";
import UseEffectExample from "./useEffectExample.jsx";
import UseLayoutEffectExample from "./UseLayoutEffectExample.jsx";
import UseContextExample from "./UseContextExample.jsx";
import UseReducerExample from "./UseReducerExample.jsx";

class ClassRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<FunctionalCompoMenu />}>
            <Route path="functionalclock" element={<Clock />} />
            <Route
              path="functionalcompoexample"
              element={<FunctionalCompoExample />}
            />
            <Route
              path="stateexampleinfunctionalcompo"
              element={<StateExampleFunctionalCompo />}
            />
            <Route
              path="useeffectexampleinfunctionalcompo"
              element={<UseEffectExample />}
            />
            <Route
              path="uselayouteffectexampleinfunctionalcompo"
              element={<UseLayoutEffectExample />}
            />
            <Route
              path="usecontextinfunctionalcompo"
              element={<UseContextExample />}
            />
            <Route
              path="usereducerinfunctionalcompo"
              element={<UseReducerExample />}
            />
          </Route>
        </Routes>
      </>
    );
  }
}

export default ClassRoute;
