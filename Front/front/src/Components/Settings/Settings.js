import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import DietPref from './DietPref';
import axios from 'axios';
import MonetisationSet from './MonetisationSet';

const Settings = () => {
  return (
    <>
      <UserInfo/>
      <DietPref/>
      <MonetisationSet/>
    </>
  );
};

export default Settings;