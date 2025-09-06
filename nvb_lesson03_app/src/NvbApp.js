import React, { Component } from 'react'
import NvbFuncComp from './components/NvbFuncComp'
import NvbClassComp from './components/NvbClassComp';
import NvbRenderList from './components/NvbRenderList';
import NvbListStudent from './components/NvbListStudent';
class NvbApp extends Component {
  constructor(props){
        super(props);
        this.state ={
            student: [
                    { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", inActive: true },
                    { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", inActive: true },
                    { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", inActive: false },
                    { id: 4, name: "Phạm Thị D", age: 23, gender: "Nữ", inActive: true },
                    { id: 5, name: "Hoàng Văn E", age: 24, gender: "Nam", inActive: false },
                ],
        }
    }
  render() {
    return (
      <div className="App">
      <h1>Nông Văn Bách</h1>
      <h2>Ôn tập component / props / state / Render Listkey </h2>
      <hr/>
      <NvbFuncComp/>
      <hr/>
      <NvbFuncComp fullName="Nong Van Bach" address="Lang Son" email="kunkontkls@gmail.com"/>

      <NvbClassComp/>
      <NvbClassComp name ="Nong Bach" age="24" phone="0387387894" email="kunkontkls@gmail.com"/>
      <hr/>
      <NvbRenderList/>
      <hr/>
      <NvbListStudent student = {this.state.student}/>
    </div>
    )
  }
}
export default NvbApp;
