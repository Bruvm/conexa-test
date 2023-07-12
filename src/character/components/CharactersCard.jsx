import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import { Button, CardActionArea, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';

import './charactersCard.css'

export const CharactersCard = ({ name, image, species, status, listSource, onCharacterClick, selectedFirstCharacter}) => {

    const [request, setRequest] = useState(false)

    setTimeout(() => {
        setRequest(true)
    }, 5000);
    const handleCharacterClick = () => {
        onCharacterClick(name, listSource);
    };

  

    return (
        <>
            <Card sx={{ maxWidth: '100%' }} onClick={handleCharacterClick} >
                <CardActionArea>
                    {
                        request ?
                            <CardMedia
                                component="img"
                                height="200"
                                image={image}
                                alt={name}
                            />
                            :
                            <Skeleton variant="rectangular" width={'100%'} height={200} />
                    }

                    <CardContent>
                        {
                            request ?
                                <Box sx={{ display: 'flex' }}>
                                    <CircleIcon style={{ fontSize: '10px', fill: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray' }} />
                                    <Typography variant="body2" color="secondary.main">
                                        {name} - {species}
                                    </Typography>
                                </Box>
                                :
                                <>
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton />
                                    </Box>
                                </>
                        }


                    </CardContent>

                </CardActionArea>
            </Card >
        </>

    );
}
