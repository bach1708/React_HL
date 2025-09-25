import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NvbNavBar() {
  return (
    <nav style={{padding:"0.5rem 1rem",background:'#eee'}}>
        <NavLink to={'/'}style={{padding:"0.5rem 1rem"}}>Trang Chủ</NavLink>
        <NavLink to='/about'style={{padding:"0.5rem 1rem"}}>Giới Thiệu</NavLink>
        <NavLink to='/contact'style={{padding:"0.5rem 1rem"}}>Liên Hệ</NavLink>
        <NavLink to='/product'style={{padding:"0.5rem 1rem"}}>Sản Phẩm</NavLink>
        <NavLink to='/users'style={{padding:"0.5rem 1rem"}}>Người Dùng</NavLink>
    </nav>
  )
}
