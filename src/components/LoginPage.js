import React, { useEffect, useState } from 'react';
import './components.css';
import Cookies from 'universal-cookie';

const LoginPage = () => {

    const cookies = new Cookies();

    const UserID = cookies.get('UserID');

    if (UserID){
      window.location.href = "/";
    }

    const [username, setUsername] = useState('');
    const [remember, setRemember] = useState(false);
    const [isError, setIsError] = useState(false);
    const [Error, setError] = useState('');
    
    useEffect(() => {
      document.title = "Sign in"
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const regex = /^[A-Za-z]+([A-Za-z0-9])*$/;
        if(username.length < 3) {
          setIsError(true);
          setError("Username must be atleast 3 characters long.");
        }
        else if(username.length >= 20) {
          setIsError(true);
          setError("Username must be atmost 20 characters long.");
        }
        else if(!regex.test(username)) {
          setIsError(true);
          setError("Username must start with an alphabet and it must be alphanumeric.");
        }
        else {
          setIsError(false);
          if (remember){
            cookies.set('UserID', username, { path: "/", maxAge: 31536000});
          }
          else {
            cookies.set('UserID', username, { path: "/" , maxAge: 3600});
          }
          window.location.href = "/";
        }
        e.target.uname.value = "";
        
    };


    return ( 
        <div>
            <div class="container text-center my-5 py-5">
      <div class="d-flex justify-content-center mt-5">
        <div class="card card-outline card-primary mx-3 px-3 border-white bg-dark text-blue col-lg-3 col-sm-6 col-9">
          <div class="card-body w-100">
            <h3 class="m-3">Todo App</h3>

            <form onSubmit={handleLogin} autocomplete="off">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="uname"
                  placeholder="Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                
              </div>
              {isError && <div class="row mb-3 text-start"><div class="col-12"><span class="errors fs-6 fw-bold">{Error}</span></div></div>}
              <div class="row">
                <div class="col-12 text-start h-100 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      onChange={(e) => setRemember(e.currentTarget.checked)}
                    />
                    <label class="form-check-label" for="flexCheckDefault" >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>


              <div class="col-12">
              <button
                    type="submit"
                    name="submit"
                    class="btn border-white bg-dark text-blue btn-block hover-link"
                  >
                  
                    Sign In
                  </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}
 
export default LoginPage;