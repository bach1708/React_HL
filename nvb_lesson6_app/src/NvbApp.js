import React, { Component } from 'react'
import NvbEventComp from './components/NvbEventComp'
import NvbEventCompClass from './components/NvbEventCompClass'
import NvbEventForm1 from './components/NvbEventForm1'
import NvbEventForm2 from './components/NvbEventForm2'

export default class NvbApp extends Component {
  render() {
    return (
      <div className="container border">
      <h1 className='text-center'>Nông Văn Bách <br/> React Js - Form - Event </h1>
      <hr/>
      <NvbEventComp/>

      <NvbEventCompClass/>

      <NvbEventForm1/>
      
      <NvbEventForm2/>
    </div>
    )
  }
}
