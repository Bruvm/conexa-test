import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import RickAndMortyImage from '../../assests/img/rick_and_morty.png'

export const Header = () => {
    return (
        <Box className="header" sx={{backgroundColor: 'neutral.main'}}>

            <img src={RickAndMortyImage} alt='RickAndMortyImage' className='img-header' style={{width: '40%'}} />
           <Box sx={{paddingTop: '40px'}}>
           <Typography sx={{fontWeight: 500, fontSize: '20px', marginBottom: '20px'}}>
            Get more information about your favorites character
            </Typography>
            <Button variant='contained' href="#characters">Start now</Button>
           </Box>

        </Box>
    )
}
