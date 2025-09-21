import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NvbProduct() {
    const products = [
        {id:1, name:"iphone 17"},
        {id:2, name:"Samsung Galaxy s50"},
        {id:3, name:"xiaomi 15 ultra"}
        
    ]
  return (
    <div>
        <h2>danh sách sản phẩm</h2>
        <hr/>
        <ul>
            {products.map((p)=>(
                <li>
                    <Link to={`/product/${p.id}`}>{p.name}</Link>
                </li>
            ))
        }
        <hr/>
        <Outlet />
        </ul>
    </div>
  )
}
