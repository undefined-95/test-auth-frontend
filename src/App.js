import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import React from 'react';
import { ListPage } from './pages/list-page';
import { RestorePage } from './pages/restore-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/account" element={<RestorePage />} />
        <Route path="/people" element={<ListPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
