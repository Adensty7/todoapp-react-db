import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import Todos from './components/Todos';
import TodoNavbar from './components/TodoNavbar';

const App = () => {
  return ( 
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={ <div>
      <TodoNavbar /> <Todos />
    </div> } />
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    </div>
   );
}
 
export default App;