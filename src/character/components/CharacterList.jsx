import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Face5Icon from '@mui/icons-material/Face5';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
export const CharacterList = ({ characters, selectedCharacter, onSelectCharacter }) => {

  const handleClick = character => {
    onSelectCharacter(character);
  };

  return (
    <Grid container spacing={3} id="characters" >
      {characters.map(character => (
        <Grid item lg={4} xs={6} key={character.id}>
          <Card
            onClick={() => handleClick(character)}
            sx={{
              cursor: 'pointer',
              backgroundColor: selectedCharacter === character ? '#daeb95' : '#f1f1f1',
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
                  <Typography variant='body1' sx={{ fontWeight: 600 }}>
                    {character.name}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {
                    character.status === 'Alive' ?
                    <FavoriteIcon style={{ fontSize: '15px', fill: 'green', marginRight: '5px' }}/>
                    :
                    character.status === 'Dead' ?
                    <HeartBrokenIcon style={{ fontSize: '15px', fill: 'red', marginRight: '5px' }} />
                    :
                    <QuestionMarkIcon style={{ fontSize: '15px', fill: 'gray', marginRight: '5px' }}/>
                  }
                  
                  <Typography>
                    {character.status}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Face5Icon style={{ fontSize: '15px', fill: '#43a047',  marginRight: '5px'}} />
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
