import React from 'react';
import TodoNavbar from "./TodoNavbar";
import Todos from './Todos';

const TodosPage = () => {
    return ( 
        <div>
            <TodoNavbar />
            <Todos />
        </div>
     );
}
 
export default TodosPage;