import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NvbNavBar.css'; 

export default function NvbNavBar() {
  return (
    <nav className="nvb-navbar">
      <NavLink to="/" className="nvb-link">Trang Chủ</NavLink>
      <NavLink to="/about" className="nvb-link">Giới Thiệu</NavLink>
      <NavLink to="/contact" className="nvb-link">Liên Hệ</NavLink>
      {/* <NavLink to='/product'style={{padding:"0.5rem 1rem"}}>Sản Phẩm</NavLink> */}
      <NavLink to="/users" className="nvb-link">Người Dùng</NavLink>
    </nav>
  );
}

