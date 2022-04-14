import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeesList'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/employee-list'} element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
