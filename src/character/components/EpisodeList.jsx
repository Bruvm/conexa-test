import { Box, Divider, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const EpisodeList = ({ character }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const number = character.episode.map(url => {
      const match = url.match(/\/(\d+)$/);
      return match ? parseInt(match[1]) : null;
    });

    fetch(`https://rickandmortyapi.com/api/episode/${number}`)
      .then(response => response.json())
      .then(data => Array.isArray(data) ? setEpisodes(data) : setEpisodes([data]))
  }, [character]);


  return (
    <Box sx={{ height: '400px', overflowY: 'auto' }}>
      {Array.isArray(episodes) && episodes.length > 0 ? (
        episodes.map(episode => (
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
      ) : (
        <Typography variant='body2'>This character has no episodes</Typography>
      )}
    </Box >
  );
};

