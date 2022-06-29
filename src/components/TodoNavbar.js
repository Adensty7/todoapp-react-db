import React, { useState } from 'react';


const TodoNavbar = () => {
    const [todos, setTodos] = useState([ 
        {user_id: "Aharnish", todo: "Complete this project", status: false}
    ]);

    const items = ["item", "items"];

    return todos.length ? (
        <div className="todos-navbar">
            <nav class="navbar m-3 p-3 border-white bg-dark text-blue text-center">
                <div className="container-lg justify-content-center">
                    <h1 className="h1">Todo List</h1>
                </div>
                <div className="container-lg justify-content-center">
                <h3>Currently you have {todos.length} { todos.length === 1 ? items[0] : items[1] } in your list.</h3>
                </div>
            </nav>
        </div>
    ) : (
        <div className="todos-navbar">
            <nav class="navbar m-3 p-3 border-white bg-dark text-blue text-center">
                <div className="container-lg justify-content-center">
                    <h1 className="h1">Todo List</h1>
                </div>
                <div className="container-lg justify-content-center">
                <h3>Currently, you have nothing to do.</h3>
                </div>
            </nav>
        </div>
    );
}
 
export default TodoNavbar;