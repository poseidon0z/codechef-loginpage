import React from 'react';
import './LoginPage.css';

interface Props {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
  }

function Register({setCurrentPage} : Props) {
    const onlogin = () => {
        setCurrentPage("login");
    }
    const onregister = () => {
        setCurrentPage("register");
    }
  return (
    <div className="login-page">
      <h1 className="codechef-heading">CODECHEF</h1>
      <div className="left-side">
        <div className="login-box">
          <h2 className="login-heading">Register</h2>
          <form>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" />
            </div>
            <div className="button-group">
              <button className="login-button" onClick={onregister}>Register</button>
              <button className="register-button" onClick={onlogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-side">
        <div className="text-content">
          <h2 className="text-heading">Who are we?</h2>
          <p className="text-paragraph">
            We are a club in vitc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
            enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
            consequat in, pretiuum bibendum augue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
