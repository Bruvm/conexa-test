import React, { useState, useEffect } from 'react';
import { Alert, Box, Grid, IconButton, Pagination, SwipeableDrawer, Typography, Button } from '@mui/material';


import { CharacterList, EpisodeList, SharedEpisodeList, SkeletonCard } from '../components';
import { CharacterLayout } from '../layout';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useCharacterData } from '../hooks';
export const Character = () => {
    const {
        charactersOne,
        charactersTwo,
        selectedCharacter1,
        selectedCharacter2,
        loading,
        currentPage,
        nextPage,
        prevPage,
        handlePageChange,
        handleCharacter1Select,
        handleCharacter2Select,
    } = useCharacterData();

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
        if (selectedCharacter1 != null && selectedCharacter2 != null) setOpen(true);
    }, [selectedCharacter1, selectedCharacter2]);

    return (
        <CharacterLayout >
            {selectedCharacter1 && selectedCharacter2 ?
                <Button onClick={toggleDrawer(true)} variant="contained" sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 99 }}>
                    Show again <KeyboardArrowUpIcon />
                </Button>
                : ""
            }

            <Grid container spacing={12} >

                <Grid item xs={12}>
                    <Alert severity="info"> <strong> If it's your first time here, you can click on your favorites characters to get more information about them. </strong></Alert>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ marginBottom: '20px' }}>Characters #1</Typography>

                    </Grid>
                    {charactersOne ?
                        <CharacterList
                            characters={charactersOne}
                            selectedCharacter={selectedCharacter1}
                            onSelectCharacter={handleCharacter1Select}
                            loading={loading}
                        />
                        :
                        <SkeletonCard repeat={10} />

                    }
                </Grid>


                <Grid item md={6} xs={12}>

                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ marginBottom: '20px' }}>Characters #2</Typography>
                            {charactersTwo ?
                                <CharacterList
                                    characters={charactersTwo}
                                    selectedCharacter={selectedCharacter2}
                                    onSelectCharacter={handleCharacter2Select}
                                    loading={loading}
                                />
                                :
                                <SkeletonCard repeat={10} />
                            }
                        </Grid>

                </Grid>


                <Grid item xs={12} >
                    <Box sx={{ margin: '50px 0', display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            count={42}
                            page={currentPage}
                            onChange={handlePageChange}
                            nextlink={nextPage}
                            prevlink={prevPage}
                        />
                    </Box>

                </Grid>

            </Grid>




            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >


                <Grid container spacing={4} sx={{ p: 3 }}>
                    <Grid item xs={4} >
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingBottom: '20px', fontWeight: 'bold' }}> {selectedCharacter1 && selectedCharacter1.name} - Episodes</Typography>
                        {selectedCharacter1 && selectedCharacter2 ? <EpisodeList character={selectedCharacter1} /> : ''}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingBottom: '20px', fontWeight: 'bold' }}>Shared Episodes</Typography>
                        {selectedCharacter1 && selectedCharacter2 && (
                            <SharedEpisodeList
                                character1={selectedCharacter1}
                                character2={selectedCharacter2}
                            />
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' color={'primary.main'} sx={{ paddingBottom: '20px', fontWeight: 'bold' }}>{selectedCharacter2 && selectedCharacter2.name} - Episodes</Typography>
                        {selectedCharacter2 && selectedCharacter1 ? <EpisodeList character={selectedCharacter2} /> : ''}
                    </Grid>
                </Grid>
            </SwipeableDrawer>



        </CharacterLayout >
    );
};


