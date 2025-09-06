import React from 'react'

export default function NvbFuncComp(props) {
  return (<div>
    <h2>Demo Function Component</h2>
    <div>
        <h3> Nội dung học từ props </h3>
        <p>welcome to, {props.fullName}</p>
        <p>địa chỉ: {props.address}</p>
        <p>email: {props.email}</p>
    </div>
    </div>
  )
}
