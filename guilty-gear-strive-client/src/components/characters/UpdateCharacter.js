import { useState } from 'react'
import CharacterForm from '../shared/CharacterForm';

const UpdateCharacter = (props) => {
    const { user } = props
    // NOT SURE HOW TO IMPORT CHARACTER WHILE ALSO DECLARING IT?
    const [character, setCharacter] = useState({
        name: props.character.name,
        race: props.character.race,
        age: props.character.age,
        origin: props.character.origin,
        eyeColor: props.character.eyeColor,
        bloodType: props.character.bloodType,
        height: props.character.height,
        weight: props.character.weight,
        isADandy: props.character.isADandy,
        // owner: user._id,
    })
    // this will handle typing in the form!
    const handleChange = (e) => {
        
        setCharacter(prevCharacter => {
            const updatedValue = e.target.value;
            const updatedName = e.target.name;
            const updatedCharacter = {
                [updatedName]: updatedValue
            }
            return {
                // we can spread out the previous object
                ...prevCharacter, 
                // AND the new one!
                // this will overwrite the stuff that changes in the previous state WHILE STILL keeping the new stuff!
                ...updatedCharacter
                
            }
        })
    }
    const { msgAlert } = props
    return (
        <div>
            <h1><span className="heavenOrHell">HEAVEN OR HELL...FIGHT!</span></h1>
            <h3>Update Character - {character.name}:</h3>
            <CharacterForm character={ character } handleChange={ handleChange } msgAlert={msgAlert} user={user}/>
        </div>
    );
}

export default UpdateCharacter;