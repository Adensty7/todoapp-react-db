import React, { useState } from 'react';
import './components.css'
import ReCAPTCHA from 'react-google-recaptcha';

const TodoForm = (props) => {
    const {UserID, addTodo} = props;
    const [todo, setTodo] = useState('');
    const [validated, setValidated] = useState(false);

    const onCaptcha = () => {
        setValidated(true);
    }

    const checkCaptcha = (e, todo, userID, validated) => {
        e.preventDefault();
        
        if(validated) {
            addTodo(todo, userID);
            e.target.todo.value = "";
            setTodo('');
        }
        else {
            alert("Captcha wasn't filled. Try again.");
            window.location.reload(false);
        }
        
    }
    return ( 
        <div className="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6 m-3 p-3 border-white bg-dark text-blue">
                    <form onSubmit={(e) => checkCaptcha(e, todo, UserID, validated)}>
                        <label>Add New Todo: </label>
                        <input type="text" name="todo" className="form-control" placeholder="Add Todo"
                        onChange={(e) => setTodo(e.target.value)} required autoComplete='off' />
                        
                        <div class="justify-content-center col-12 d-grid p-3">
                            <button type="submit" className="btn btn-blue my-3" ><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="justify-content-center col-12 d-grid p-3">
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