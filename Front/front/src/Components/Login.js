import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const LoginContainer = styled.div`
        width:400px;
        height:200px;
        border-radius: 5px;
        padding: 20px;
        margin: 150px auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        h2{
            text-align:left;
        }
        input[type="text"],
        input[type="password"] {
            display:block;
            }
        label{
            text-align:left;
            display:block;
            }
        div{
            margin-bottom:15px;}
        div.login-submit{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    `;
  return (
    <LoginContainer>
        <h2>Login</h2>
        <form>
            <div>
                <label for="email">Email:</label>
                <input type="text" placeholder="Tape your email" name="email" required/>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" placeholder="Tape your password" name="password" required/>
            </div>
            <div className="login-submit">
                <a href="#">Forgot Password?</a>
                <input type="submit" value="Login"/>
            </div>
        </form>
    </LoginContainer>
  )
}
