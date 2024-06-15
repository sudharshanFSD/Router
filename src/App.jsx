import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import All from './All'
import FullStackDev from './FullStackDev'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'
import './App.css'
function App() {
  return (
    <div>  
           <h1 style={{color:"rgb(13, 24, 31)", textAlign:'center'}}>Learn Tech from Latest Courses</h1>
           <p style={{color:"rgb(13, 24, 31)", textAlign:'center'}}>Explore 175+ Premium Courses with New Course Additions every Month.</p>
      <BrowserRouter>
       
      <div>
        <Nav />
      </div>
    <Routes>
      <Route path='/' element={<All />} />
      <Route path='/fullstackdev' element={<FullStackDev />} />
      <Route path='/datascience' element={ <DataScience />} />
      <Route path='/cybersecurity' element={<CyberSecurity />} />
      <Route path='/career' element={<Career />} />
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App