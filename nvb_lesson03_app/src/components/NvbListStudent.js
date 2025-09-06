import React, { Component } from 'react'

export default class NvbListStudent extends Component {

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
                    {this.props.student.map((student,index)=>{
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
