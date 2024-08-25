import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import BlogItemWrapper from './components/BlogItemWrapper'
import CreateBlog from './components/createBlog'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/blogs/:id' element={<BlogItemWrapper/>}/>
    <Route exact path='/create' element={<CreateBlog/>}/>
  </Routes>
  </BrowserRouter>
)

export default App