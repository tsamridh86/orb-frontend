import React from 'react'
import { TextField } from '@material-ui/core'

export const Registration = () => {
    return (
    <div>
         <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
    </div>)
}