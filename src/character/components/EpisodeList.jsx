import React, { useState, useEffect } from 'react';

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
    <div>
      {Array.isArray(episodes) && episodes.length > 0 ? (
        episodes.map(episode => (
          <div key={episode.id}>
            <h3>{episode.name}</h3>
            <p>Episode: {episode.episode}</p>
          </div>
        ))
      ) : (
        <p>No episodes found.</p>
      )}
    </div>
  );
};

