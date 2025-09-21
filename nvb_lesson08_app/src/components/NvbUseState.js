import React, { useState } from 'react'

export default function NvbUseState() {
    //khai báo sử dụng hàm useState
    const[count, setCount]=useState(0)
    //Hàm xử lí sự kiện tăng giảm
    const handleTang = ()=>{
        setCount(count+1)
    }
    const handleGiam = ()=>{
        setCount(count-1)
    }

    //sử dụng với mảng
    const danh_sach =[1,2,5,3]
    const [list, setList] = useState(danh_sach)

    const handleAddList = ()=>{
    //tạo số ngẫu nhiên từ 1 đến 100
    const soNgauNhien = Math.floor(Math.random() * 100); // 0 → 99
    setList([...list, soNgauNhien]);
    }
  return (
    <div className='alert alert-danger'>
        <h2>sử dụng hàm useState</h2>
        <p>count :{count}</p>
        <button onClick={handleTang}>Tăng++</button>
        <button onClick={handleGiam}>Giảm--</button>
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={handleAddList}>Add</button>
    </div>
  )
}
