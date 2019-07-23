
import React, { Component } from 'react';
import { apiCall} from "../services/api";


export default class bmi extends Component{
// Optionally the request above could also be done as
constructor(props){
  super(props);
  this.state={
    bmi: 1,
    data:{}
  }
}


handleSubmit=(event)=>{
  event.preventDefault()
  apiCall("get", `/api/bmi/${this.state.bmi}`).then((data)=>{
    this.setState({data: data})
    console.log(this.state.data.data)});
  console.log("clicked")

}
handleInputChange=(event)=>{
  event.preventDefault();
  this.setState({

    [event.target.name]: event.target.value

  })
}


  render(){
    const {bmi , data}=this.state
    console.log(data);
    console.log(bmi);
    return (
        <div class="box">
        <h2>Foods and Nutritions</h2>
        <form style={{marginTop: "40%"}} onSubmit={this.handleSubmit} >

          BMI:
          <input type="number" id="thullu" name="bmi" value={bmi} onChange={this.handleInputChange}  />
          <span id="msg" style={{display:'none',color:'red',fontSize:'13px'}}><br/></span>
          <button type="Submit" name="submit" onClick="this.handleSubmit()">boutton</button>

        </form>
        <p>{data.data}</p>

    </div>
    );
  }
}
