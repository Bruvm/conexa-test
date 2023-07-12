import React, { useState, useEffect } from 'react';
import { Grid, Pagination, Typography } from '@mui/material';
import axios from 'axios';
import { config } from '../../config';



import { CharacterList, EpisodeList, SharedEpisodeList } from '../components';
import { CharacterLayout } from '../layout';

export const Character = () => {
    //const [characters, setCharacters] = useState([]);
    const [charactersOne, setCharactersOne] = useState([]);
    const [charactersTwo, setCharactersTwo] = useState([]);
    const [selectedCharacter1, setSelectedCharacter1] = useState(null);
    const [selectedCharacter2, setSelectedCharacter2] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();

    useEffect(() => {
        getCharacters();
    }, [currentPage]);

    const getCharacters = async () => {
        try {
            const response = await axios.get(
                `${config.api.API_URL}character?page=${currentPage}`
            );
            console.log(response)
            setNextPage(response.data.info.next);
            setPrevPage(response.data.info.prev);
            setCharactersOne(response.data.results.slice(0, Math.ceil(response.data.results.length / 2)));
            setCharactersTwo(response.data.results.slice(Math.ceil(response.data.results.length / 2)));

        } catch (error) {
            console.log(error);
        }
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        setSelectedCharacter1(null);
        setSelectedCharacter2(null);
    };

    const handleCharacter1Select = character => {
        setSelectedCharacter1(character);
    };

    const handleCharacter2Select = character => {
        setSelectedCharacter2(character);
    };

    return (
        <CharacterLayout>
            <Typography>
                Rick and Morty Characters
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>


                    <Grid item xs={12}>
                        <Typography>Characters #1</Typography>

                    </Grid>
                    <CharacterList
                        characters={charactersOne}
                        selectedCharacter={selectedCharacter1}
                        onSelectCharacter={handleCharacter1Select}
                    />




                </Grid>

                <Grid item xs={6}>

                    <Grid container spacing={3} >

                        <Grid item xs={12}>
                            <Typography>Characters #2</Typography>
                            <CharacterList
                                characters={charactersTwo}
                                selectedCharacter={selectedCharacter2}
                                onSelectCharacter={handleCharacter2Select}
                            />
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

            </Grid>


            <Grid container>

                <Grid item xs={4}>
                    <Typography variant='h5'>Character #1 - Episodes</Typography>

                    {selectedCharacter1 && selectedCharacter2 ? <EpisodeList character={selectedCharacter1} /> : ''}
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h5'>Character #1 & Character #2 - Shared Episodes</Typography>
                    {selectedCharacter1 && selectedCharacter2 && (
                        <SharedEpisodeList
                            character1={selectedCharacter1}
                            character2={selectedCharacter2}
                        />
                    )}
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h5'>Character #2 - Episodes</Typography>
                    {selectedCharacter2 && selectedCharacter1 ? <EpisodeList character={selectedCharacter2} /> : ''}
                </Grid>
            </Grid>
        </CharacterLayout>
    );
};


