import React, { useEffect, useState } from "react";
import './components.css'

const Todos = () => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true)

    
    const [todos, setTodos] = useState([ 
        {user_id: "Aharnish", todo: "Complete this project", status: false}
    ]);

    useEffect(() => {
        document.title = "Todo List"

    }, [todos])
    if (loading) {
        return (
            <div className="todos">
        <div className="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6">

                        <div class="list-group m-3 p-3" >
                            
                        { todos.map(todo => {
                            return (
                                <div class="list-group-item py-3 border-white bg-dark text-blue">
                                    <div className="row">
                                        <div class="col-10 done">
                                            <h5 class="mb-1">{todo.todo}</h5> 
                                        </div>
                                        <div class="col-2">
                                            <span className="float-end h5">
                                            <i class="fa-solid fa-xmark"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }


                        </div>

                    </div>
                </div>
        </div>
        </div>
    )
    }
    else {
        <div class="text-center">
          <br />
          <br />
          <br />
          <h1 class="fw-bold">Loading.....</h1>
        </div>
      }
}
 
export default Todos;