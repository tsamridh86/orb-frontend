import React from 'react';
import { TextField } from '@material-ui/core';

const Registration = () => (
  <div>
    THis is the registration page
    <TextField
      id="standard-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
    />
  </div>
);

export default Registration;
