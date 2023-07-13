import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
//import { Navbar } from '../components''

import '../style/styles.css'
import { Header } from '../components/Header'

const width = 100

export const CharacterLayout = ({ children }) => {

    return (

        <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'neutral.light', }}
            className="animate__animated animate__fadeIn"
        >

            <Header />


            <Grid item xs={12} >
                <Box
                    component='main'
                    sx={{p:3,marginTop: '50px'}}
                >
                    {children}
                </Box>
            </Grid>

        </Grid>


    )
}
