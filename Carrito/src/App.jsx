import { useState } from 'react'
import './App.css'
import { NavBar } from './NavBar'
import { ItemListContainer } from './ItemListContainer'


const usuario = "Mundo"

function App() {
 

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {"Bienvenido " + usuario}/>
    </>
  



  )
}

export default App
