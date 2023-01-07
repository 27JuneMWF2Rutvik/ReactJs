import React, { Component } from "react";
// import PropTypes from 'prop-types';

class StateLifeCycleInClassCompo extends Component {
  constructor(props) {
    // super(props);
    console.log("constructor");
    super(props);
    this.state = {
    //   stateData: "init",
    //   valueForIncreDec: 0,
      trunonoff:true
    }
  }
  // componentWillMount() {
  //     console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
  }
  // componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps");
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true
  }
  // componentWillUpdate(nextProps, nextState) {
  //     console.log("componentWillUpdate");
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ trunonoff: !this.state.trunonoff });
          }}
        >
          {this.state.trunonoff ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

// StateLifeCycleInClassCompo.propTypes = {

// };

export default StateLifeCycleInClassCompo;
