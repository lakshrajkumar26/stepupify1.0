import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/NavBar'
import Recognition from './components/Recognition'
import StatsCounter from './components/StatsCounter'
import MyFooter from './components/MyFooter'

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
        {isHomePage && (
          <>
            <StatsCounter />
            <Recognition />
          </>
        )}
      </main>
      <MyFooter />
    </div>
  )
}

export default App