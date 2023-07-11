import { Card, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CharacterLayout } from '../layout/CharacterLayout'
import { ExpandMore } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CharactersCard } from '../components/CharactersCard';

const characters = [
  {
    "id": 21,
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
    "type": "Fish-Person",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/21",
    "created": "2017-11-04T22:39:48.055Z"
  },
  {
    "id": 22,
    "name": "Aqua Rick",
    "status": "unknown",
    "species": "Humanoid",
    "type": "Fish-Person",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/22",
    "created": "2017-11-04T22:41:07.171Z"
  },
  {
    "id": 23,
    "name": "Arcade Alien",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Immortality Field Resort",
      "url": "https://rickandmortyapi.com/api/location/7"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26"
    ],
    "url": "https://rickandmortyapi.com/api/character/23",
    "created": "2017-11-05T08:43:05.095Z"
  },
  {
    "id": 24,
    "name": "Armagheadon",
    "status": "Alive",
    "species": "Alien",
    "type": "Cromulon",
    "gender": "Male",
    "origin": {
      "name": "Signus 5 Expanse",
      "url": "https://rickandmortyapi.com/api/location/22"
    },
    "location": {
      "name": "Signus 5 Expanse",
      "url": "https://rickandmortyapi.com/api/location/22"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/16"
    ],
    "url": "https://rickandmortyapi.com/api/character/24",
    "created": "2017-11-05T08:48:30.776Z"
  },
  {
    "id": 25,
    "name": "Armothy",
    "status": "Dead",
    "species": "unknown",
    "type": "Self-aware arm",
    "gender": "Male",
    "origin": {
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/25",
    "created": "2017-11-05T08:54:29.343Z"
  },
  {
    "id": 26,
    "name": "Arthricia",
    "status": "Alive",
    "species": "Alien",
    "type": "Cat-Person",
    "gender": "Female",
    "origin": {
      "name": "Purge Planet",
      "url": "https://rickandmortyapi.com/api/location/9"
    },
    "location": {
      "name": "Purge Planet",
      "url": "https://rickandmortyapi.com/api/location/9"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/20"
    ],
    "url": "https://rickandmortyapi.com/api/character/26",
    "created": "2017-11-05T08:56:46.165Z"
  },
  {
    "id": 27,
    "name": "Artist Morty",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/28"
    ],
    "url": "https://rickandmortyapi.com/api/character/27",
    "created": "2017-11-05T08:59:07.457Z"
  },
  {
    "id": 28,
    "name": "Attila Starwar",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/17"
    ],
    "url": "https://rickandmortyapi.com/api/character/28",
    "created": "2017-11-05T09:02:16.595Z"
  },
  {
    "id": 29,
    "name": "Baby Legs",
    "status": "Alive",
    "species": "Human",
    "type": "Human with baby legs",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/29",
    "created": "2017-11-05T09:06:19.644Z"
  },
  {
    "id": 30,
    "name": "Baby Poopybutthole",
    "status": "Alive",
    "species": "Poopybutthole",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "unknown",
      "url": ""
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/30.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/30",
    "created": "2017-11-05T09:13:16.483Z"
  },
]

export const Character = () => {

 
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CharacterLayout>
      <Grid container spacing={5}>
        {
          characters.map((character) => (
            <Grid item xs={3}>
              <CharactersCard key={character.id} {...character}></CharactersCard>
            </Grid>
          ))
        }
      </Grid>





    </CharacterLayout>
  )
}
