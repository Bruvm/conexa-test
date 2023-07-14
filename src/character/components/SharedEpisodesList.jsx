import { Box, Divider, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from 'axios'
import config from '../../config';


export const SharedEpisodeList = ({ character1, character2 }) => {
  const [sharedEpisodes, setSharedEpisodes] = useState([]);


  useEffect(() => {
    getSharedEpisodes();
  }, [character1, character2]);

  const getSharedEpisodes = async () => {

    try {
      const response = await axios.get(`${config.api.API_URL}episode`);
      const allEpisodes = response.data.results;

      const episodesWithBothCharacters = allEpisodes.filter(episode =>
        episode.characters.includes(character1.url) &&
        episode.characters.includes(character2.url)
      );

      setSharedEpisodes(episodesWithBothCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ height: '400px', overflowY: 'auto' }}>

      {

        sharedEpisodes.length > 0
          ?
          sharedEpisodes.map(episode => (
            <Box key={episode.id} sx={{ margin: '20px 10px 10px 10px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <LiveTvIcon style={{ fontSize: '20px', fill: 'primary.main', marginRight: '5px' }} />
                <Typography variant='body2' sx={{ fontWeight: '600' }}>{episode.name} | {episode.episode}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarMonthIcon style={{ fontSize: '20px', fill: 'primary.main', marginRight: '5px' }} />
                <Typography variant='body2' sx={{ fontWeight: '600' }}>{episode.air_date}</Typography>
              </Box>

              <Divider sx={{ marginTop: '10px' }} />
            </Box>
          ))
          :
          <Typography variant='body2'>
            No episodes shared yet.
          </Typography>


      }

    </Box>
  );
};

