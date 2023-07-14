import { Box, Grid } from '@mui/material'
import '../style/styles.css'
import { Header, SkeletonHeader } from '../components'
import { useState } from 'react'


export const CharacterLayout = ({ children }) => {
    const [start, setStart] = useState(false)

    setTimeout(() => {
        setStart(true)
    }, 1000);
    return (
        <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'neutral.light', }}
            className="animate__animated animate__fadeIn"
        >
            {
                start ?
                    <Header />
                    :
                    <SkeletonHeader />
            }



            <Grid item xs={12} >
                <Box
                    component='main'
                    sx={{ p: 3, }}
                >
                    {children}
                </Box>
            </Grid>

        </Grid>


    )
}
