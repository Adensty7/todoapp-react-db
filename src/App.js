import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import Todos from './components/Todos';

const App = () => {
  return ( 
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Todos />} />
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    </div>
   );
}
 
export default App;