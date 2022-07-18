import React from "react";
import './components.css'

const Todos = (props) => {

        const {todos, deleteTodo, updateTodo} = props;
        return (
            <div class="col-lg-6 col-md-8 col-12">

                <div class="todos">
                <div class="list-group m-3 px-3" >
                            
                            { todos.map(todo => {
                                const dt = todo.creationTime.split(", ");
                                const timeRemaining = new Date(todo.deadline).getTime() - new Date().getTime()
                                const seconds = timeRemaining;
                                const days = Math.floor(seconds / (1000 * 60 *  60 * 24));
                                var iso = new Date(seconds).toISOString().substr(11, 8);
                                if(days > 0){
                                    iso = days + ":" + iso
                                }
                                
                                
            
                                return (
                                    <div class="list-group-item py-3 border-white bg-dark text-blue">
                                        <div className="row align-items-center">
                                            <div class="col-10 done" > 
                                                <div>
                                                {seconds < 0 && <h5 class="mb-1 notcompleted">{todo.todo}</h5>}
                                                {seconds > 0 && !todo.done && <h5 class="mb-1 notdone" onClick={(e) => updateTodo(e, todo.done, todo._id)}>{todo.todo}</h5>}
                                                {seconds > 0 && todo.done && <h5 class="mb-1 donetodo" onClick={(e) => updateTodo(e, todo.done, todo._id)}>{todo.todo}</h5>}
                                            <div>
                                                </div>
                                                {seconds > 0 && <h6 class="mb-1">Created at {dt[1]} on {dt[0]}</h6> }
                                            </div>
                                            <div>
                                                {seconds > 0 && <h6 class="mb-1">Time Remaining: {iso}</h6> }
                                                {seconds < 0 && !todo.done && <h6 class="mb-1 errors">Todo Not Done</h6>}
                                                {seconds < 0 && todo.done && <h6 class="mb-1 completed">Todo Done</h6>}
                                            </div>
                                            </div>
                                            <div class="col-2">
                                                { seconds < 0 && <span className="float-end h5">
                                                <i class="fa-solid fa-xmark hover-link" onClick={(e) => deleteTodo(e, todo._id)}></i>
                                                </span> }
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                );
                            }) }
    
    
                            </div>
    
                </div>
            
        </div>
    )
    
}
 
export default Todos;