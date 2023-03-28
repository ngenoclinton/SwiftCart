import React from 'react';

import './login-register.css'
const Login =()=>{
    return(
<div className='login-container'>
  <div class="container">
    <div class="section-header">
    <h3>Login</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. 
    </p>
    </div>
    <div class="row">
        <div class="col-md-6">
        <div class="login-form">
            <div class="row">
                <div class="col-md-6">
                    <label>E-mail / Username</label>
                    <input class="form-control" type="text" placeholder="E-mail / Username"/>
                </div>
                <div class="col-md-6">
                    <label>Password</label>
                    <input class="form-control" type="text" placeholder="password"/>
                </div>
                <div class="col-md-12">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="newaccount"/>
                    <label class="custom-control-label" for="newaccount">Keep me signed in</label>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn">Submit</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Login;