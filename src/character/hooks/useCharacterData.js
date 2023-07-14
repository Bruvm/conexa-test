import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

export const useCharacterData = () => {
    const [charactersOne, setCharactersOne] = useState([]);
    const [charactersTwo, setCharactersTwo] = useState([]);
    const [selectedCharacter1, setSelectedCharacter1] = useState(null);
    const [selectedCharacter2, setSelectedCharacter2] = useState(null);
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
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

    return {
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
    };
}
