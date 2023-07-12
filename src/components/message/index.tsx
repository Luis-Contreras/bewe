import { Alert } from '@mui/material'
import React from 'react'

export const Message = ({type, children}: any) => {
    return (
        <Alert variant="outlined" style={{marginTop: '5px'}} severity={type}>{children}</Alert>
    )
}
