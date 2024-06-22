import React, { useState, useEffect } from 'react'
import axios from 'axios'




const CharacterDetail = ({ characterId, onClose }) => { 
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            const ts = 1;
            const publicKey = 'e0aa01ce19e7bee493491a63cfd12969';
            const hash = 'd9e525245acbd97c9df6fb46dccfbfae';

            const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
            try {
                const response = await axios.get(url);
                setCharacter(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching character details:', error);
                setLoading(false);
            }
        };

        fetchCharacterDetail();
    }, [characterId]); // Re-fetch data when characterId changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!character) {
        return <p>No character details found.</p>;
    }

    return (
        <div className='details'>
            <button onClick={onClose}>Close</button> {/* Call onClose on button click */}
            <h2>{character.name}</h2>
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics</h3>
            <ul>
                {character.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
