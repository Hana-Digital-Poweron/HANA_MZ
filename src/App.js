import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login/Login';
import Main from './pages/main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;