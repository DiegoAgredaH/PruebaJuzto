import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TareasPage from './Pages/TareasPage'
import TareasFormPage from './Pages/TareasFormPage'
import { Navegacion } from './Components/Navegacion'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto px-28 '>
        <Navegacion />
        <Routes>
          <Route path='/' element={<Navigate to="/lista" />} />
          <Route path='/lista' element={<TareasPage />} />
          <Route path='/tarea/:id' element={<TareasFormPage />} />
          <Route path='/crear-tareas' element={<TareasFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App