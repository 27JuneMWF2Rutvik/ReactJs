import React, { Component } from 'react'
import styled from 'styled-components'
 
class StyledCompoExample extends Component {
  render() {
    const StyledCompoBtn = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;
    // const Button = styled.button` color: palevioletred;font-size: 1em; margin: 1em; padding: 0.25em 1em;border-radius: 3px;`;

    return (
      <div>
        <StyledCompoBtn>Click Me</StyledCompoBtn>
      </div>
    )
  }
}


export default StyledCompoExample;
