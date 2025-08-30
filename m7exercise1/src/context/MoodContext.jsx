import React, { createContext, useState, useContext } from 'react';

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [happy, setHappy] = useState('😊');

    const changeMood = () => {
        setHappy(prevMood => (prevMood === '😊' ? '😢' : '😊'));
    }

    return (
        <MoodContext.Provider value={{ happy, changeMood }}>
            {children}
        </MoodContext.Provider>
    );
}

export const useMood = () => {
    return useContext(MoodContext);
}

export default MoodContext;