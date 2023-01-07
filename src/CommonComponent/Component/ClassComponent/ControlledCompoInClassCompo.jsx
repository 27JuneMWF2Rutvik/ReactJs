import React, { Component } from "react";

class ControlledCompoInClassCompo extends Component {
    constructor(props) {
        super(props)
            this.state = {username:"",formData:{"temp":"data"}}
    }
    submitdata = (event)=>{
        event.preventDefault()
    }
    storeStateData = (event)=>{
        // console.log("called",event);
        // console.log("called",event.target);
        // console.log("called",event.target.value)
        // this.setState({username:"testing"})
        this.setState({username:event.target.value})
    }
    storeDatatoStateObject =(event)=>{
      // this.setState({...this.state.formData,[this.state.formData.temp]:event.target.value})
      // const { target : { value,name } } = event
      this.setState(prevState => ({
            formData: {...prevState.data,[event.target.name]: event.target.value}
      }))
    }
  render() {
    return (
      <div>
        <p>
          In HTML, form element such as &lt;input&gt;,&lt;textarea&gt; and &lt;secect&gt;
          type
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio porro
          ducimus doloremque fuga adipisci autem odit, voluptate enim optio
          voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          ab earum deserunt suscipit officia placeat tempore veniam nam sunt
          facere.
        </p>
        <h2>set Data State with</h2>
        <form>
            {JSON.stringify(this.state)}
            <input type="text" onChange={this.storeStateData} name="username" id="username" />
            <input type="submit" onClick={this.submitdata} name="" id="" />
        </form>
        <h2>set Data to State inside input arrow</h2>
        <form>
            {JSON.stringify(this.state)}
            <input type="text" onChange={(event)=>{this.setState({username:event
              .target.value})}} name="username" id="username" />
            <input type="submit" onClick={this.submitdata} name="" id="" />
        </form>
        <h2>set multiple Data to State inside input arrow</h2>
        <form>
            {JSON.stringify(this.state.formData)}
            {/* <input type="text" onClick={this.storeDatatoStateObject}
             name="uname" id="uname" /> */}
             <br />

            <input type="text" onChange={(event)=>{this.setState((prevState) => ({
            formData: {...prevState.formData,[event.target.name]: event.target.value}  }))}}
            name="uname" id="uname" />

            <br />  
            <br />

            <input type="text" onChange={(event)=>{ this.setState(prevState => ({ formData: { ...prevState. 
            formData, [event.target.name]: event.target.value }})) }} name="password" id="password"  />
            {/* <input type="text" onChange={(event)=>{this.setState((prevState) => ({
            formData: {...prevState.data,[event.target.name]: event.target.value}  }))}}
            name="password" id="password" /> */}
            <input type="submit" onClick={this.submitdata} name="" id="" />
        </form>
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default ControlledCompoInClassCompo;
