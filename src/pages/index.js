import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tracks from './tracks'
import Track from './track'
import Module from './module';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path='/' />
        <Route element={<Track />} path='/track/:trackId' />
        <Route path="/track/:trackId/module/:moduleId" element={<Module />}/>
      </Routes>
    </BrowserRouter>
  )
}
