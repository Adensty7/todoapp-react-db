import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import TodosPage from './components/TodosPage';
import Cookies from 'universal-cookie';

const App = () => {
  const cookies = new Cookies();

  const UserID = cookies.get('UserID');

  return ( 
    <div className="App">
    <BrowserRouter>
    <Routes>
    { UserID && <Route exact path='/' element={ <TodosPage /> } />}
    { !UserID && <Route path="/login" element={<LoginPage />} /> }
    </Routes>
    </BrowserRouter>
    </div>
   );
}
 
export default App;