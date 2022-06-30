import React , { useState, useEffect } from 'react';
import TodoNavbar from "./TodoNavbar";
import Todos from './Todos';
import Cookies from 'universal-cookie';
import axios from 'axios';
import TodoForm from './TodoForm';

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
        //console.log(res.data);
        setTodos(res.data);
        setLoading(true);
      });
  }, [todos])

    const addTodo = (e, todo, UserID) => {
      e.preventDefault();
      if(todo.length <= 36){
        axios.post("https://adensty-todoapp-react-db-api.herokuapp.com/", {
        "user_id": UserID,
        "todo": todo,
        "done": false
      })
      .then((res) => {
        console.log(res);
      })
      }
      else {
        alert("A Todo can't be this long. Try somethin shorter.");
      }
      
    }

    const deleteTodo = (e, id) => {
      e.preventDefault();
      axios.delete("https://adensty-todoapp-react-db-api.herokuapp.com/" + id)
      .then((res) => {
        console.log(res);
      })
    }

    const updateTodo = (e, done, id) => {
      e.preventDefault();
      axios.put("https://adensty-todoapp-react-db-api.herokuapp.com/" + id, {
      "done": !done
      })
      .then((res) => {
        console.log(res);
      })
      
      
    }

    
    return ( 
        <div>
            {loading && <TodoNavbar todos={todos} handleSignOut={handleSignOut} userID={UserID} /> }
            {loading && <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} /> }
            {loading && <TodoForm UserID={UserID} addTodo={addTodo}/>}
        </div>
     );
}
 
export default TodosPage;