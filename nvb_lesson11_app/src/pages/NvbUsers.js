import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom';
export default function NvbUsers() {

    //api
    const nvb_api="https://68d4ed81e29051d1c0ac8c27.mockapi.io/k22cnt2_NongVanBach_2210900003/users"

    const [users, setUsers] = useState([]);      // lưu dữ liệu trả về từ API
    const [loading, setLoading] = useState(true); // trạng thái loading

    //useEffect;
    useEffect(()=>{
        axios
        .get(nvb_api)
        .then((response)=>{
            setUsers(response.data); //lưu dữ liệu vào state
        })
        .catch((error) =>{
            console.error("Có lỗi khi gọi API:", error);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[])
    if(loading) return <p> Đang tải dữ liệu...</p>

    //render data
    let usersElement =users.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.status}</td>
                <td>
                    <Link to={`/users/edit/${item.id}`} className="btn btn-success">
                        Edit
                    </Link>
                </td>
                
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách users</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {usersElement}
            </tbody>
        </table>
        <a href='/users/add' className='btn btn-primary'>Thêm Mới</a>
        <Outlet />
    </div>
  )
}
