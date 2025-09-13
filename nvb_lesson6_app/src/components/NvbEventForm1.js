import React, { Component } from 'react'

export default class NvbEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state ={
            studentName:"Bach"}
        
    }
    handleChange = (e)=>{
        this.setState({
            studentName:e.target.value
        })
    }
    handleUpdate = (e)=>{
        e.preventDefault();
        this.setState({
            studentName:'Bách mới'
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.studentName)
    }
  render() {
    return (
      <div className="alert alert-danger">
        <h1>Event Form</h1>
        <hr/>
        <form>
            <label htmlFor='studentName'>Student Name:</label>
            <input name='studentName' id='studentName' 
                value={this.state.studentName}
                onChange ={this.handleChange}
                />
            <button onClick={this.handleUpdate}>Changer value</button>
            <button onClick={this.handleSubmit}>submit</button>
        </form>

      </div>
    )
  }
}
