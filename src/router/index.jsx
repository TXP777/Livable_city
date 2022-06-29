import React from 'react'
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/User'
import LifeService from '../pages/LifeService'
import Shop from '../pages/Shop'



const AppRouter =()=>{
    return (
      <Router>
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/user' element={<User/>}></Route>
              <Route path='/life' element={<LifeService/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
      </Router>
    )
}

export default AppRouter;