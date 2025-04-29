import React from 'react';
import styled from 'styled-components';
import Otmane from "../../assets/images/Otmane.JPG";

export default function UserInfo() {
  const UserInfo = styled.div`
    div.user-info-container {
      display:flex;
      align-items:center;
    } 
    img{
      border-radius:50%;
      margin-right:20px;
    } `;
  return (
    <UserInfo>
        <h2 style={{textAlign:"left"}}>User Information</h2>
        <div className="user-info-container"> 
            <img src={Otmane} style={{width:"100px",height:"100px"}}/>
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
