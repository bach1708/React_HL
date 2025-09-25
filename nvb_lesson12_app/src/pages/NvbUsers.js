import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom';
import '../css/NvbUsers.css';
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

    const handleDelete = (id) => {
    if (window.confirm("❗ Bạn có chắc chắn muốn xóa user này không?")) {
      axios
        .delete(`${nvb_api}/${id}`)
        .then(() => {
          alert("✅ Xóa user thành công!");
          // cập nhật lại danh sách sau khi xóa
          setUsers(users.filter((u) => u.id !== id));
        })
        .catch((err) => {
          console.error("❌ Lỗi khi xóa user:", err);
        });
    }
  };
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
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        
                </td>
                
            </tr>
        )
    })
  return (
    <div className="users-container">
      <h2 className="users-title">Danh sách sinh viên đang có trên hệ thống</h2>
      <hr />
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ Và Tên</th>
            <th>Tên Người Dùng</th>
            <th>Mật Khẩu</th>
            <th>Trạng Thái</th>
            <th>Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.status}</td>
              <td>
                <Link to={`/users/edit/${item.id}`} className="btn btn-success">
                  Sửa
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/users/add" className="btn btn-primary">
        ➕ Thêm Mới
      </a>

      <Outlet />
    </div>
  );
}