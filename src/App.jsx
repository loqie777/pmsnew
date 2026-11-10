import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Main from './pages/Main'
import News from './pages/News'
import Ideologwork from './pages/Ideologwork'
import Landscaping from './pages/Landscaping'
import Sport from './pages/Sport'
import Milioration from './pages/Milioration'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {
 

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='' element = {<Main/>} />
      <Route path = 'news' element = {<News/>} />
      <Route path = 'ideolog' element = {<Ideologwork/>} />
      <Route path = 'land' element = {<Landscaping/>} />
      <Route path = 'sport' element = {<Sport/>} />
      <Route path = 'melioration' element = {<Milioration/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
