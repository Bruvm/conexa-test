import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import RickAndMortyImage from '../../assests/img/rick_and_morty.png'

export const Header = () => {
    return (
        <Box className="header" sx={{backgroundColor: 'neutral.main'}}>

            <img src={RickAndMortyImage} alt='RickAndMortyImage' className='img-header' />
            <Typography className='description' variant='body'>
            GET MORE INFORMATION ABOUT YOUR FAVORITES CHARACTERS
            <Button variant='contained' href="#characters" sx={{marginLeft: '10px'}}>Start now</Button>

            </Typography>

        </Box>
    )
}
