import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import { Context } from './index'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
