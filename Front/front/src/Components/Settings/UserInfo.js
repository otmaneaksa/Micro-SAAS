import React from 'react';
import styled from 'styled-components';
import Otmane from "../../assets/images/Otmane.jpg";

export default function UserInfo() {
  return (
    <UserInfo>
        <h2>User Information</h2>
        <div>
            <img src={Otmane}/>
            <div>
                <h3>Name:</h3>
                <p>Otmane</p>
                <h3>Email:</h3>
                <p>otmomks@gmail.com</p>
            </div>
        </div>
    </UserInfo>
  )
}
