import React, { useState, useEffect } from 'react';

export const SharedEpisodeList = ({ characters, character1, character2 }) => {
  const [sharedEpisodes, setSharedEpisodes] = useState([]);

  useEffect(() => {

    getSharedEpisodes();
  }, [character1, character2]);

  const getSharedEpisodes = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const data = await response.json();
    const allEpisodes = data.results;

    const episodesWithBothCharacters = allEpisodes.filter(episode =>
      episode.characters.includes(character1.url) &&
      episode.characters.includes(character2.url)
    );

    setSharedEpisodes(episodesWithBothCharacters);
  };

  return (
    <div>

      {sharedEpisodes.map(episode => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>Episode: {episode.episode}</p>
        </div>
      ))}
    </div>
  );
};

