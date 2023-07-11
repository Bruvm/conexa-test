import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import { CardActionArea, Skeleton } from '@mui/material';
import { Box } from '@mui/system';


export const CharactersCard = ({ name, image, species }) => {

    const [request, setRequest] = useState(false)

    setTimeout(() => {
        setRequest(true)
    }, 5000);


    return (
        <>
            <Card sx={{ maxWidth: '100%' }} >
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
                                <Typography variant="body2" color="secondary.main">
                                    {name} - {species}
                                </Typography>
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
