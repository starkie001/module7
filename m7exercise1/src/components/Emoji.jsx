import React, { useState } from 'react';

const Emoji = () => {
    const [happy, setHappy] = useState(true);

    const changeMood = () => {
        setHappy(!happy);
    }

    return (
        <>
        <div>
            {happy ? "😊" : "😢"}
        </div>
        <button onClick={changeMood}>Change Mood</button>
    </>
    )
}

export default Emoji;