import React from 'react';
import styled from 'styled-components';
import signupImage from '../assets/images/Regimen.jpg';

export default function Signup() {
    const SignupContainer = styled.div`
        display: flex;
        div.signup-image {
            background: url(${signupImage}) no-repeat center center;
            background-size: cover;
            width: 70%;
            height: 100vh;
    }
    `;
    const Label = styled.label`
        display:block;
        text-align:left;
        font-weight:bold;
        font-size:16px;
    `;
    const Form = styled.form`
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
        }
    `;
    const Title = styled.h1`
        text-align:left;
    `;
  return (
    <SignupContainer>
        <div className="signup-image"></div>
        <div style={{padding:'30px'}}>
            <div className="signup-form">
            <Title>Sign up</Title>
            <p>Register for meal planning account</p>
            <Form className="signup-form">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <input placeholder="First last name" type="text" name="name"/>
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <input placeholder="Enter your email" type="email" name="email"/>
                </div>
                <div>
                    <Label htmlFor="user">UserName</Label>
                    <input placeholder="Create your username" type="text" name="user"/>
                </div>
                <div>
                    <Label htmlFor="password">Create your password</Label>
                    <input placeholder="Create your password" type="password" name="password"/>
                </div>
                <div>
                    <Label htmlFor="confirm">Confirm password</Label>
                    <input placeholder="Confirm your password" type="password" name="confirm"/>
                </div>
                <div>
                    <input type="checkbox" name="terms" id="terms"/>
                    <label htmlFor="terms">I accept the Terms and Privacy Policy.</label>
                </div>
                <div>
                    <input type="submit" value="Join"/>
                </div>
                <p>Already a member?<a>Log in</a></p>
            </Form>
        </div>
        </div>
    </SignupContainer>
  )
}
