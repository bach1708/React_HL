import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NvbNavBar from './components/NvbNavBar'
import NvbHome from './pages/NvbHome'
import NvbAbout from './pages/NvbAbout'
import NvbContact from './pages/NvbContact'
import NvbProductDetail from'./pages/NvbProductDetail'
import NvbProduct from'./pages/NvbProduct'
import NvbUsers from'./pages/NvbUsers'
import NvbNotFound from'./pages/NvbNotFound'
import NvbUserAdd from './pages/NvbUserAdd'
import NvbUserEdit from './pages/NvbUserEdit'
export default function NvbApp() {
  return (
    <div className='container border'>
      <h1>React Route - Demo [Nông Văn Bách]</h1>
      <hr/>
      <BrowserRouter>
        <NvbNavBar />
        <Routes>
          <Route path='/'element={<NvbHome/>}/>
          <Route path='/about' element= {<NvbAbout/>}/>
          <Route path='/contact' element= {<NvbContact/>}/>
          
          {/* Nested router */}
          <Route path='/product'element = {<NvbProduct/>}>
            <Route path=":id" element = {<NvbProductDetail/>} /> 
          </Route>
          <Route path='/users'element ={<NvbUsers/>} > </Route>
            <Route path="/users/add" element = {<NvbUserAdd/>} /> 
            <Route path="/users/edit/:id" element = {<NvbUserEdit/>} /> 
          


          {/* 404 page */}
          <Route path='*'element ={<NvbNotFound/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}
