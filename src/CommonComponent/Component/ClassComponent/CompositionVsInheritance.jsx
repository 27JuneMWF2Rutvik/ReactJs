import React, { Component } from 'react';

class CompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <DialogAnything title="<h1>Testing</h1>">
                    Lorem ipsum dolor <b> sit amet consectetur </b> adipisicing elit. 
                    Laudantium enim molestias asperiores nemo at voluptates 
                    architecto amet, obcaecati, quod voluptatem id? Dolores 
                    voluptas, omnis, veniam, aut exercitationem necessitatibus 
                </DialogAnything>
            </div>
        );
    }
}
function DialogAnything(props) {
    console.log(props);
    return <div style={{border:"1px solid"}}>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
    </div>
  }

export default CompositionVsInheritance;