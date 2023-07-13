import React, { useState, useEffect } from 'react';
import { Button, Divider, Grid, Pagination, SwipeableDrawer, Typography } from '@mui/material';
import axios from 'axios';
import { config } from '../../config';



import { CharacterList, EpisodeList, SharedEpisodeList } from '../components';
import { CharacterLayout } from '../layout';
import { SkeletonCard } from '../components/SkeletonCard';

export const Character = () => {
    //const [characters, setCharacters] = useState([]);
    const [charactersOne, setCharactersOne] = useState([]);
    const [charactersTwo, setCharactersTwo] = useState([]);
    const [selectedCharacter1, setSelectedCharacter1] = useState(null);
    const [selectedCharacter2, setSelectedCharacter2] = useState(null);

    const [loading, setloading] = useState(false)

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
            setloading(true)
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



    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(open);
    };

    useEffect(() => {
        console.log({ selectedCharacter1, selectedCharacter2 })
        if (selectedCharacter1 != null && selectedCharacter2 != null) {

            setOpen(true);
            console.log(open)
        }

    }, [selectedCharacter1, selectedCharacter2]);

    return (
        <CharacterLayout sx={{position: 'relative'}}>
            <Button sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                        ver mas
                    </Button>
            <Grid container spacing={15}>

                <Grid item md={6} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ marginBottom: '20px' }}>Characters #1</Typography>

                    </Grid>
                    <CharacterList
                        characters={charactersOne}
                        selectedCharacter={selectedCharacter1}
                        onSelectCharacter={handleCharacter1Select}
                        loading={loading}
                    />
                </Grid>


                <Grid item md={6} xs={12}>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ marginBottom: '20px' }}>Characters #2</Typography>
                            <CharacterList
                                characters={charactersTwo}
                                selectedCharacter={selectedCharacter2}
                                onSelectCharacter={handleCharacter2Select}
                                loading={loading}
                            />
                        </Grid>
                    </Grid>

                </Grid>


                <Grid xs={12} sx={{ margin: '50px 0', display: 'flex', justifyContent: 'center' }}>
                    
                    <Pagination
                        count={42}
                        page={currentPage}
                        onChange={handlePageChange}
                        nextlink={nextPage}
                        prevlink={prevPage}
                    />
                </Grid>

            </Grid>




            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >


                <Grid container spacing={4}>
                    <Grid item xs={4} >
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold' }}>Character #1 - Episodes</Typography>
                        {selectedCharacter1 && selectedCharacter2 ? <EpisodeList character={selectedCharacter1} /> : ''}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold' }}>Shared Episodes</Typography>
                        {selectedCharacter1 && selectedCharacter2 && (
                            <SharedEpisodeList
                                character1={selectedCharacter1}
                                character2={selectedCharacter2}
                            />
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold' }}>Character #2 - Episodes</Typography>
                        {selectedCharacter2 && selectedCharacter1 ? <EpisodeList character={selectedCharacter2} /> : ''}
                    </Grid>
                </Grid>
            </SwipeableDrawer>



        </CharacterLayout >
    );
};


