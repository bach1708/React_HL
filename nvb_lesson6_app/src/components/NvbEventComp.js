import React from 'react'

export default function NvbEventComp() {
    const nvb_Func1 =() =>{
        alert ("xin chào")
    }
    const nvb_Func2 =(param) =>{
        alert (param)
    }
  return (
    <div>
        <h1>Event - Component Function</h1>
        <button onClick={nvb_Func1}>Click here</button>
        
        {/* gọi lần đầu tiên và duy nhất khi lòad */}
        {/* <button onClick={nvb_Func1()}>Click here</button> */}

        {/* gọi hàm có tham số */}
        <button onClick={()=>nvb_Func2('nong bach')}>Click here Param</button>

    </div>
    
  )
}
