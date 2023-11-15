import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import CrearUsuario from './Pages/CrearUsuario/CrearUsuario'
import CrearUsuarioRHF from './Pages/CrearUsuarioRHF/CrearUsuarioRHF'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/crear-usuario-comun" element={<CrearUsuario/>} />
      <Route path="/crear-usuario" element={<CrearUsuarioRHF/>} />
    </Routes>
    </>
  )
}

export default App