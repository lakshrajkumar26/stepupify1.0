
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import Recognition from './components/Recognition'
import ProductPage from './components/ProductPage'
import StatsCounter from './components/StatsCounter'
import MyFooter from './components/MyFooter'
import About_Us from './components/About_Us'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <StatsCounter/>
      <Recognition/>
      <About_Us/>
      <ProductPage/>
      <MyFooter/>
    </div>
  )
}

export default App





// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/NavBar'
// import Home from './components/Home'
// import Recognition from './components/Recognition'
// import MyFooter from './components/MyFooter'
// import About from './components/About'
// import StatsCounter from './components/StatsCounter'
// import About_Us from './components/About_Us'
// import {BrowserRouter,Routes,Route,} from 'react-router-dom'
// // import { Associates } from './components/Associates'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
//    <BrowserRouter>
//    <Navbar/>
//    <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/about" element={<About_Us/>} />
//     {/* <Route path="/about" element={<Recognition/>} /> */}
    
    
//     {/* <Associates/>  */}
    
//      </Routes>
//    </BrowserRouter>
//    <StatsCounter/>
//     <Recognition/>
//     <MyFooter/>
//    </>
//   )
// }

// export default App
