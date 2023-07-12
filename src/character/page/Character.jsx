import { Box, Card, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, Pagination, Typography } from '@mui/material'
import { CharacterLayout } from '../layout/CharacterLayout'
import { ExpandMore } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CharactersCard } from '../components/CharactersCard';

import axios from 'axios';
import { useEffect, useState } from "react";

export const Character = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);


  useEffect(() => {
    getCharacters();
  }, [currentPage]);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      console.log(response)

      //setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setPrevPage(response.data.info.prev);

      const firstList = response.data.results.filter(
        (character, index) => index % 2 === 0
      );
      const secondList = response.data.results.filter(
        (character, index) => index % 2 !== 0
      );


      setFirstList(firstList);
      setSecondList(secondList);
    } catch (error) {
      console.log(error);
    }
  };


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

    const [selectedFirstCharacter, setSelectedFirstCharacter] = useState(null);
    const [selectedSecondCharacter, setSelectedSecondCharacter] = useState(null);


  const handleCharacterClick = (name, listSource) => {

    if(listSource === 'firstList'){
      console.log('este es el firt', name)
      setSelectedFirstCharacter(name);
    }else if(listSource === 'secondList'){
       console.log('este es el second', name)
       setSelectedSecondCharacter(name);
    }
    
  };


  return (
    <CharacterLayout>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container spacing={3} >

            <Grid item xs={12}>
              <Typography>Characters #1</Typography>
            </Grid>
            {
              firstList.map((character) => (
                <Grid item xs={4} key={character.id}>
                  <CharactersCard
                    key={character.id}
                    {...character}
                    listSource="firstList"
                    onCharacterClick={handleCharacterClick}
                  ></CharactersCard>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3} >
            <Grid item xs={12}>
              <Typography>Characters #2</Typography>
            </Grid>
            {
              secondList.map((character) => (
                <Grid item xs={4} key={character.id}>
                  <CharactersCard
                    key={character.id}
                    {...character}
                    listSource="secondList"
                    onCharacterClick={handleCharacterClick}
                    selectedFirstCharacter={selectedFirstCharacter}
                  ></CharactersCard>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>


      <Pagination
        count={42} // Reemplaza con el valor adecuado
        page={currentPage}
        onChange={handlePageChange}
        nextlink={nextPage}
        prevlink={prevPage}
      />



      <Box>
        Character #1

            <Typography variant='h1'>{selectedFirstCharacter}</Typography>
      </Box>
      <Box>
        Character #1 and Character #2
      </Box>

      <Box>
        Character #2

        <Typography variant='h1'>{selectedSecondCharacter}</Typography>
      </Box>

    </CharacterLayout >
  )
}
