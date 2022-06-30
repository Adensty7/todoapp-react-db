import React, { useState } from 'react';
import './components.css'

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    return ( 
        <div className="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6 m-3 p-3 border-white bg-dark text-blue">
                    <form >
                        <label>Add New Todo: </label>
                        <input type="text" className="form-control" placeholder="Add Todo"
                        onChange={(e) => setTodo(e.target.value)} required />
                        <div class="justify-content-center col-12 d-grid p-3">
                            <button type="submit" className="btn btn-blue my-3"><i class="fa-solid fa-plus"></i></button>
                        </div>
                   
                    </form>
                    </div>
            </div>
        </div>
     );
}
 
export default TodoForm;