import React, { useState } from 'react';
import './components.css'
import ReCAPTCHA from 'react-google-recaptcha';

const TodoForm = (props) => {
    const {UserID, addTodo, Error, setError, isError, setIsError} = props;
    const [todo, setTodo] = useState('');
    const [validated, setValidated] = useState(false);

    const onCaptcha = () => {
        setValidated(true);
        setIsError(false);
    }

    const checkCaptcha = (e, todo, userID, validated) => {
        e.preventDefault();
        
        if(validated) {
            addTodo(todo, userID);
            e.target.todo.value = "";
            setTodo('');
        }
        else {
            setIsError(true);
            setError("Captcha wasn't filled. Try again.");
        }
        
    }
    return ( 
        <div class="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6 col-12 m-3 p-3 border-white bg-dark text-blue">
                    <form onSubmit={(e) => checkCaptcha(e, todo, UserID, validated)}>
                        <label>Add New Todo: </label>
                        <input type="text" class="mb-4" name="todo" className="form-control" placeholder="Add Todo"
                        onChange={(e) => setTodo(e.target.value)} required autoComplete='off' />
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