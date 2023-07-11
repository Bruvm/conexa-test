import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({width}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          r&mAPI
        </Typography>
      </Toolbar>
    </AppBar>

  )
}
