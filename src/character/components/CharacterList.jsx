import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Face5Icon from '@mui/icons-material/Face5';

export const CharacterList = ({ characters, selectedCharacter, onSelectCharacter, loading }) => {

  const handleClick = character => {
    onSelectCharacter(character);
  };

  return (
    <Grid container spacing={3} id="characters" >

      {characters.map(character => (
        <Grid item xs={3} key={character.id}>
          <Card

            onClick={() => handleClick(character)}
            sx={{
             
              cursor: 'pointer',
              backgroundColor:  selectedCharacter === character ? '#daeb95' : '#f1f1f1',
            }}
          >
            <CardActionArea>
            
                  <CardMedia
                    component="img"
                    height="200"
                    image={character.image}
                    alt={character.name}
                  />
                 

              <CardContent>
         
                  
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='body1' color={'primary.main'}>
                          {character.name}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <FavoriteIcon style={{ fontSize: '15px', fill: character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'gray', marginRight: '5px' }} />
                        <Typography>
                          {character.status}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Face5Icon style={{ fontSize: '15px', fill: '#43a047' }} />
                        <Typography>
                          {character.species}
                        </Typography>
                      </Box>

                  



              </CardContent>

            </CardActionArea>

          
          </Card>

        </Grid>
      ))}

    </Grid>
  );
};
