import React, { Component } from 'react'

export default class NvbClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Nông",
            lastName:"Bách",
            course:"reactJs",
            marks:[
                {"toan":"10"},
                {"van":"8"},
                {"anh":"9"},
            ]
        }
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Demo Class Component</h2>
        <hr/>
        <div>
            <p>Đọc dữ liệu từ props</p>
            <p>Name: {this.props.name}</p>
            <p>Tuổi: {this.props.age}</p>
            <p>sdt: {this.props.phone}</p>
            <p>email: {this.props.email}</p>
        </div>
        <div>
            <p>Đọc dữ liệu từ state</p>
            <p>fullName: {this.state.firstName} {this.state.lastName}</p>
            <p>course:{this.state.course}</p>
            <p>Mark {this.state.marks.toString()}</p>
        </div>

      </div>
    )
  }
}
