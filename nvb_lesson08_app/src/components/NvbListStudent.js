import React, {useState} from 'react'
import NvbFormStudent from './NvbFormStudent';

export default function NvbListStudent() {
  //mockdata
    const studentsInit = [
  { id: 1, name: "Nguyen Van A", age: 20 },
  { id: 2, name: "Tran Thi B", age: 21 },
  { id: 3, name: "Le Van C", age: 19 },
  { id: 4, name: "Pham Thi D", age: 22 },
  { id: 5, name: "Hoang Van E", age: 23 },
];
//state
const[students, setStudent] = useState (studentsInit)
//add
const handleSubmit = (param)=>{
    console.log("param:",param);
    const newStudents = [...students, param];
    setStudent(newStudents)
}
return (
    <div>
        <h2>Danh sách sinh viên</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((stud,index)=>{
                    return(
                        <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.age}</td>
                          
                        </tr>
                        )
                        
                    })
                }
            </tbody>
        </table>
        <NvbFormStudent onSubmit={handleSubmit}/>
    </div>
  )
}
