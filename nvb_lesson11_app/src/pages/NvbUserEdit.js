import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
export default function NvbUserEdit() {
  const navigate = useNavigate();
    const nvb_api="https://68d4ed81e29051d1c0ac8c27.mockapi.io/k22cnt2_NongVanBach_2210900003/users";
    const {id} = useParams();
    const [form, setForm] = useState({
        fullname:"",
        username:"",
        password:"",
        status:"",
    });
    useEffect(() => {
    axios
      .get(nvb_api+`/${id}`)
      .then((res) => {
        setForm({
          fullname:res.data.fullname ||"",
          username:res.data.username ||"",
          password:res.data.password ||"",
          status:res.data.status || 0,
        });
      })
      .catch((err) => {
        console.error("❌ Lỗi khi lấy user:", err);
      });
  }, [id]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
            });
    }

    const handleSubmit = (e) => {
    e.preventDefault(); 
    axios
    .put(nvb_api+`/${id}`,form)
    .then((res)=>{
        alert("Cập nhật thành công!");
        console.log("User vừa thêm:", res.data);
        navigate("/users");
    })
    .catch((err)=>{
        console.error("Lỗi khi thêm user:",err);
    });
}
   return (
    <div>
        <h2>Sửa thông tin user</h2>
        <form onSubmit={handleSubmit}>
        <div>
          Fullname:
          <input
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
        </div>

        <div>
          Username:
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div>
          Status:
          <input
            name="status"
            value={form.status}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          Cập Nhật
        </button>
      </form>

    </div>
    
  )
}
