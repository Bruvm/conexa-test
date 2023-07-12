import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';

export const CharacterList = ({ characters, selectedCharacter, onSelectCharacter }) => {
  const handleClick = character => {
    onSelectCharacter(character);
  };

  return (
    <Grid container spacing={3} >
     
        {characters.map(character => (
           <Grid item xs={3}key={character.id}>
          <Card
            
            onClick={() => handleClick(character)}
            style={{
              border: selectedCharacter === character ? '2px solid blue' : 'none',
              padding: '10px',
              cursor: 'pointer',
              marginBottom: '10px',
              backgroundColor: '#f1f1f1',
            }}
          >
             <CardActionArea>
                    {
                        characters ?
                            <CardMedia
                                component="img"
                                height="200"
                                image={character.image}
                                alt={character.name}
                            />
                            :
                            <Skeleton variant="rectangular" width={'100%'} height={200} />
                    }

                    <CardContent>
                        {
                            characters ?
                                <Box sx={{ display: 'flex' }}>
                                    <CircleIcon style={{ fontSize: '10px', fill: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray' }} />
                                    <Typography variant="body2" color="secondary.main">
                                        {character.name} - {character.species}
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
          </Card>

          </Grid>
        ))}
     
    </Grid>
  );
};
