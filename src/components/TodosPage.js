import React , { useState, useEffect } from 'react';
import TodoNavbar from "./TodoNavbar";
import Todos from './Todos';
import Cookies from 'universal-cookie';
import axios from 'axios';

const TodosPage = () => {
    const cookies = new Cookies();

    const UserID = cookies.get('UserID');
    
    // cookies.remove('UserID');

    if (UserID === undefined){
      window.location.href = "/login";
    }

    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignOut = () => {
        cookies.remove('UserID'); 
        window.location.href = '/login';
    }


    useEffect(() => {
        document.title = "My Todo List"
        axios.get("https://adensty-todoapp-react-db-api.herokuapp.com/user/" + UserID)
        .then((res) => {
          console.log(res.data);
          setTodos(res.data);
          setLoading(true);
        });
    }, [])
    return ( 
        <div>
            {loading && <TodoNavbar todos={todos} handleSignOut={handleSignOut} /> }
            {loading && <Todos todos={todos} /> }
        </div>
     );
}
 
export default TodosPage;