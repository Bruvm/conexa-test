import { Box, Grid } from '@mui/material'
import React from 'react'
import { Navbar } from '../components'

const width = 100

export const CharacterLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Grid 
                container 
                spacing={2} 
                sx={{ minHeight: '100vh', backgroundColor: 'neutral.light', }}
                >
                <Grid item xs={12}>
                    <Navbar width={width}></Navbar>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        component='main'
                        sx={{ flexGrow: 1, p: 3 }}
                    >
                        {children}
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
