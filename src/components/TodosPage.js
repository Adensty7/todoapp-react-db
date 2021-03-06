import React , { useState, useEffect } from 'react';
import TodoNavbar from "./TodoNavbar";
import Todos from './Todos';
import Cookies from 'universal-cookie';
import axios from 'axios';
import TodoForm from './TodoForm';

const TodosPage = () => {
    const cookies = new Cookies();

    const UserID = cookies.get('UserID');

    setTimeout(() => {
      window.location.reload(false);
    }, 60000);
    
    // cookies.remove('UserID');

    if (UserID === undefined){
      window.location.href = "/login";
    }

    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [Error, setError] = useState('');

    const handleSignOut = async() => {
        cookies.remove('UserID'); 
        window.location.reload(false);
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

    const addTodo = (todo, deadline, UserID) => {
      let options = {  
        year: "numeric", month: "2-digit",  
        day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" 
      };   
      const date = new Date().toLocaleString("en-us", options)
      console.log(date); 
      const deadline2 = new Date(deadline).toLocaleString("en-us", options);
      console.log(deadline2);
      const checkTodo = todos.every(t => {
        return t.todo !== todo;
      });
      // Regex for alphanumeric words with whitespace as delimiter
      const regex = /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/;
      if (!checkTodo) {
        setIsError(true);
        setError("This todo is already in your To Do List");
      }
      else if (todos.length > 25) {
        setIsError(true);
        setError("You already have a lot of todos in your list. Remove the completed ones and try again.")
      }
      else if(todo.length < 3){
        setIsError(true);
        setError("A Todo can't be so short. Try again.");
      }
      else if(todo.length > 30){
        setIsError(true);
        setError("A Todo can't be this long. Try something shorter.");
      }
      else if(!regex.test(todo)) {
        setIsError(true);
        setError("This todo either contains unnecessary whitespaces or contains words that are not alphanumeric.");
      }
      else {
        setIsError(false);
        axios.post("https://adensty-todoapp-react-db-api.herokuapp.com/", {
        "user_id": UserID,
        "todo": todo,
        "done": false,
        "creationTime": date,
        "deadline": deadline2
      })
      .then((res) => {
        console.log(res);
      })
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
            <div class="row justify-content-center align-items-center">
            {loading && <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} /> }
            {loading && <TodoForm UserID={UserID} addTodo={addTodo} Error={Error} setError={setError} isError={isError} setIsError={setIsError}/>}
            </div>
            
        </div>
     );
}
 
export default TodosPage;
