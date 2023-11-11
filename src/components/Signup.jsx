import React from 'react';


function SignUp(props){
    return(
        <div className='sign-up'>
            <h1 className='sign-up_head'>Sign Up</h1>
            <fieldset id="close-sign_up">
                <form>
                    <div className='inputs'>
                        <input type="text" name="" id="" placeholder='Enter email' />
                        <input type="password" name="" id="" Password placeholder='Password'/>
                    </div>
                    <p>{props.terms} <a href="#sign-up">{props.link}</a></p>
                    <button>{props.btn}</button>
                </form>
            </fieldset>
        </div>
    )

}

export default SignUp;