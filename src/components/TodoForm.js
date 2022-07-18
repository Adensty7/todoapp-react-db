import React, { useState } from 'react';
import './components.css'
import ReCAPTCHA from 'react-google-recaptcha';

const TodoForm = (props) => {
    const {UserID, addTodo, Error, setError, isError, setIsError} = props;
    const [todo, setTodo] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [validated, setValidated] = useState(false);



    const onCaptcha = () => {
        setValidated(true);
        setIsError(false);
        
        
    }

    const checkCaptcha = (e, todo, deadline, userID, validated) => {
        e.preventDefault();
        
        const date = new Date();
        const deadlineDate = new Date(deadline);
        const timeDiff = deadlineDate - date;
        if(validated) {
            if (timeDiff > 0) {
                addTodo(todo, new Date(deadline).toLocaleString(), userID);
                e.target.todo.value = "";
                setTodo('');
                e.target.deadline.value= "";
                setDeadline('');
            }
            else {
                setIsError(true);
                setError("The deadline is in the past. Please set a deadline that is possible.");
            }
            
        }
        else {
            setIsError(true);
            setError("Captcha wasn't filled. Try again.");
        }
        
    }
    return ( 
        <div class="col-lg-6 col-12">
                    <div class="todosform">
                    <div class="m-3 p-3 border-white bg-dark text-blue">
                    <form onSubmit={(e) => checkCaptcha(e, todo, deadline, UserID, validated)}>
                        <label>Add New Todo: </label>
                        <input type="text" class="mb-4" name="todo" className="form-control" placeholder="Add Todo"
                        onChange={(e) => setTodo(e.target.value)} required autoComplete='off' />
                        <label>Set Deadline: </label>
                        <input type="datetime-local" class="mb-4" name="deadline" className="form-control"
                        onChange={(e) => setDeadline(e.target.value)} required />
                        {isError && <div class="row my-3 text-start"><div class="col-12"><span class="errors fs-6 fw-bold">{Error}</span></div></div>}
              <div class="row"></div>
                        <div class="justify-content-center col-12 d-grid">
                            <button type="submit" className="btn btn-blue my-3" ><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="justify-content-center col-12 d-grid">
                        <ReCAPTCHA class="mb-3"
                        sitekey="6LcpkU8gAAAAAOdW_rmwCHWbNQuOgSnKB89w1EXf"
                        onChange={onCaptcha}
                        />
                        </div>
                    </form>
                    </div>
                    </div>
        </div>
     );
}
 
export default TodoForm;