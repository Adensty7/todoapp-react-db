import React from "react";
import './components.css'

const Todos = (props) => {

        return (
            <div className="todos">
        <div className="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6">

                        <div class="list-group m-3 p-3" >
                            
                        { props.todos.map(todo => {
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
 
export default Todos;