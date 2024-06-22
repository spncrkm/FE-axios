import { useState, useEffect } from "react"
import axios from 'axios';
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import './CharacterList.module.css'


function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            const ts = 1;
            const publicKey = 'e0aa01ce19e7bee493491a63cfd12969';
            const hash = 'd9e525245acbd97c9df6fb46dccfbfae';

            const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
            try {
                const response = await axios.get(url);
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }




    return (
        <div className="hidden">
            <h1>Marvel Characters</h1>
            <div className="hidden2">
                {characters.map(character => (
                    <div key={character.id} onClick={() => setSelectedCharacterId(character.id)}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
                        <p id="charList">{character.name}</p>
                    </div>
                ))}
            </div>
            {selectedCharacterId && (
                <CharacterDetail characterId={selectedCharacterId} onClose={() => setSelectedCharacterId(null)} />
            )}
        </div>
    );
};

export default CharacterList;
