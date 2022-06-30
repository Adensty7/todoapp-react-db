import React, { useEffect, useState } from 'react';
import './components.css';
import Cookies from 'universal-cookie';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [remember, setRemember] = useState(false);


    const cookies = new Cookies();

    const UserID = cookies.get('UserID');

    if (UserID){
      window.location.href = "/";
    }
    
    useEffect(() => {
      document.title = "Sign in"
    })

    const handleLogin = (e) => {
        e.preventDefault();
        if (remember){
          cookies.set('UserID', username, { path: "/"});
        }
        else {
          cookies.set('UserID', username, { path: "/" , maxAge: 3600});
        }
        window.location.href = "/";
    };


    return ( 
        <div>
            <div class="container text-center my-5 py-5">
      <div class="d-flex justify-content-center mt-5">
        <div class="card card-outline card-primary mx-3 px-3 border-white bg-dark text-blue">
          <div class="card-body w-100">
            <h3 class="m-3">Todo App</h3>

            <form onSubmit={handleLogin} autocomplete="off">
              <div class="input-group mb-4">
                <input
                  type="text"
                  class="form-control"
                  name="uname"
                  placeholder="Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
                    class="btn border-white bg-dark text-blue btn-block"
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