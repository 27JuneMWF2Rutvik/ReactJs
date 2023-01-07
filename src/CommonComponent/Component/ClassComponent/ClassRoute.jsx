import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import WelcomeToClassCompo from "./WelcomeToClassCompo.jsx";
import ClassCompoMenu from "./ClassCompoMenu";
import JSXClassCompo from "./JSXClassCompo.jsx";
import PropsInClassCompo from "./PropsInClassCompo.jsx";
import StateInClassCompo from "./StateInClassCompo.jsx";
import StateLifeCycleInClassCompo from "./StateLifeCycleInClassCompo.jsx";
import ConditionalRenderingInClassCompo from "./ConditionalRenderingInClassCompo.jsx";
import ListKeysInClassCompo from "./ListKeysInClassCompo.jsx";
import ControlledCompoInClassCompo from "./ControlledCompoInClassCompo.jsx";
import UnControlledCompoInClassCompo from "./UnControlledCompoInClassCompo.jsx";
import SpreadVsRestCompo from "./SpreadVsRestCompo.jsx";
import CompositionVsInheritance from "./CompositionVsInheritance.jsx";
import ArrayMap from "./ArrayMap";

class ClassRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<ClassCompoMenu />} >
              <Route path="classcompointro" element={<WelcomeToClassCompo />} />
              <Route path="jsxclasscompo" element={<JSXClassCompo />} />
              <Route path="propsinclass" element={<PropsInClassCompo />} />
              <Route path="stateinclass" element={<StateInClassCompo />} />
              <Route path="statelifecycleinclass" element={<StateLifeCycleInClassCompo />} />
              <Route path="conditionalrendering" element={<ConditionalRenderingInClassCompo />} />
              <Route path="listandkeys" element={<ListKeysInClassCompo />} />
              <Route path="controlledCompo" element={<ControlledCompoInClassCompo />} />
              <Route path="uncontrolledcompo" element={<UnControlledCompoInClassCompo />} />
              <Route path="spreadvsrestcompo" element={<SpreadVsRestCompo />} />
              <Route path="compositionvsinheritance" element={<CompositionVsInheritance />} />
              <Route path="arraymap" element={<ArrayMap />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default ClassRoute;
