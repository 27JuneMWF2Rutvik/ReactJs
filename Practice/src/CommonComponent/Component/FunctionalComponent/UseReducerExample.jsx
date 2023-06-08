import { render } from '@testing-library/react';
import React, { useReducer } from 'react';


function reducerFunction(state,action) {
    console.log("State",state);
    console.log("action",action);
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}
const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducerFunction, { name: 'Taylor', age: 42 });
    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });
    }
    return (
        <div>
        {/* {JSON.stringify (state)} */}
        {/* {JSON.stringify (state.age)} */}
            <button onClick={handleButtonClick}>Click</button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </div>
    );
};

export default UseReducerExample;