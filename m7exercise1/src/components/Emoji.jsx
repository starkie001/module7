import React from 'react';
import { useMood } from '../context/MoodContext.jsx';

const Emoji = () => {
    const { happy, changeMood } = useMood();

    return (
        <>
        <div>
            {happy}
        </div>
        <button onClick={changeMood}>Change Mood</button>
    </>
    )
}

export default Emoji;