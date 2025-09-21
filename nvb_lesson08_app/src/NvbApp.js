import React from 'react'
import NvbUseState from './components/NvbUseState'
import NvbListStudent from './components/NvbListStudent'
import NvbFormStudent from './components/NvbFormStudent'
import NvbUseEffectDemo from './components/NvbUseEffectDemo'
import NvbExampleContext from './components/NvbExampleContext'

export default function NvbApp() {
  return (
    <div className='container border'>
      <h1>React Hook - Demo [Nông Văn Bách]</h1>
      <hr/>

      {/* <NvbUseState />
      <NvbListStudent/>
      <NvbUseEffectDemo/> */}

       <NvbExampleContext/>
    </div>
    
  )
}
