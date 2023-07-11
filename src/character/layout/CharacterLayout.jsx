import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components'

export const CharacterLayout = ({children}) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <Box component='main'>
            <Navbar></Navbar>
            </Box>

            <Box
                component='main'
                sx={{p:3}}
            >
                {children}
            </Box>

        </Box>
    )
}
