import React from "react";

function toggleLogin() {
  const signInForm = document.querySelector(".login");
  signInForm.classList.toggle("move-up");
  const closeForm = document.getElementById("close-login");
  closeForm.classList.toggle("show");
  closeForm.classList.add("close");
}

function LogIn(props) {
  return (
    <div className="login">
      <h1 className="sign-up_head" id="login-head" onClick={toggleLogin}>
        Log in
      </h1>
      <fieldset id="close-login" class="close">
        <form>
          <div className="inputs">
            <input type="text" name="" id="" placeholder="Username" />
            <input
              type="password"
              name=""
              id=""
              Password
              placeholder="Password"
            />
          </div>
          <button>{props.btn}</button>
          <a href="#login">{props.link}</a>
        </form>
      </fieldset>
    </div>
  );
}

export default LogIn;
