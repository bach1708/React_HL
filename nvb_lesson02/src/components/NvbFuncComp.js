import React from 'react'

export default function NvbFuncComp (NVBProps) {
  return (
    <div className='alert alert-danger'>
        <h2>function components demo</h2>
        <h3>welcome to, {NVBProps.name}- {NVBProps.age}</h3>
        <hr/>
    </div>
  )
}
