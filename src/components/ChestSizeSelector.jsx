// stream-recorder-app/src/components/ChestSizeSelector.jsx

import React from 'react';

const ChestSizeSelector = ({ chestSize, setChestSize }) => {
    return (
        <div>
            <h3>Select Chest Size:</h3>
            <select value={chestSize} onChange={(e) => setChestSize(e.target.value)}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
            </select>
        </div>
    );
};

export default ChestSizeSelector;
