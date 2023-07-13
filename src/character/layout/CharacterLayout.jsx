import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
//import { Navbar } from '../components''

import '../style/styles.css'
import { Header } from '../components/Header'

const width = 100

export const CharacterLayout = ({ children }) => {

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid
                container
                spacing={2}
                sx={{ minHeight: '100vh', backgroundColor: 'neutral.light', }}
            >

                <Header />


                <Grid item xs={12}>
                    <Box
                        component='main'
                        sx={{ p: 3 }}
                    >
                        {children}
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
