import React, { Component } from 'react'

 class NvbRenderList extends Component {
    constructor (props){
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
      <div>
            <h2>Danh sách sinh viên</h2>
            <hr/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>state</th>
                        <th>action</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.student.map((student,index)=>{
                        return(
                           <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.inActive?'Hoạt động':'Khóa'}</td>
                                <td>
                                    <button>xem</button>
                                    <button>sửa</button>
                                    <button>xóa</button>
                                </td>
                            
                            </tr> 
                        )
                    })
                }
                    
                </tbody>
            </table>
      </div>
    )
  }
}
export default NvbRenderList;