import React, { Component } from 'react'

export default class NvbEventCompClass extends Component {
    nvb_Func1 =()=>{
        alert("Hàm không có tham số")
    }
    nvb_Func2 =(param)=>{
        alert("Hàm có tham số:\n"+param)
    }
  render() {
    return (
      <div>
        <h1>Event in class component</h1>

        <button onClick={this.nvb_Func1}>Click</button>
        <button onClick={()=>this.nvb_Func2("Nong Van Bach")}>Click param</button>
      </div>
      
    )
  }
}
