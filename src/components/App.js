import React from 'react';
import SignUp from './Signup';
import LogIn from './Login';


function App(){
    return(
        <div className="container">
        <div className="form-wrapper">
            <SignUp terms="By selecting agree and continue below, I agree to the"
            link="terms of service and privacy policy"  btn="Agree and Continue"/>

            <LogIn btn="Log in" link="Forgot Password?"/>
        </div>
        </div>
    )
}

export default App;