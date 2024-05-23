import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position='static' >
        <Toolbar>
        <Typography variant='h5' flexGrow={1}>Feedback App</Typography>
        <Typography variant='h5'>V 1.0</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
