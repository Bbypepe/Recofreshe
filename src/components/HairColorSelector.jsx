// stream-recorder-app/src/components/HairColorSelector.jsx

import React from 'react';

const HairColorSelector = ({ hairColor, setHairColor }) => {
    return (
        <div>
            <h3>Select Hair Color:</h3>
            <select value={hairColor} onChange={(e) => setHairColor(e.target.value)}>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blonde">Blonde</option>
                <option value="red">Red</option>
                <option value="gray">Gray</option>
            </select>
        </div>
    );
};

export default HairColorSelector;
