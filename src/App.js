import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import TodosPage from './components/TodosPage';

const App = () => {
  return ( 
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={ <TodosPage /> } />
    <Route exact path="/login" element={<LoginPage />} />
    <Route path="*" element = { <Navigate to="/" /> } />
    </Routes>
    </BrowserRouter>
    </div>
   );
}
 
export default App;
