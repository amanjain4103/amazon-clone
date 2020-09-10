import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../firebase.js"

const Login = () => {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // do some firebase login stuff
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth)
              history.push("/")
          })
          .catch(err => console.log(err.message))
    }

    const register = (e) => {
        e.preventDefault();
        // do some firebase register stuff

        auth
          .createUserWithEmailAndPassword(email,password)
          .then(auth => {
              console.log(auth)
              if(auth) {
                  history.push('/')
              }
          })
          .catch(err => console.log(err.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                        className="login__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/200px-Amazon.com-Logo.svg.png"
                />
            </Link>
            
            
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" className="login__signinButton" onClick={signIn}>Sign-in</button>
                </form>

                <p> I have read and accepted the Terms of use and privacy policy. Amazon may als keep me informed via email about products and services </p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;