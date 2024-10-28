// stream-recorder-app/src/components/ButtSizeSelector.jsx

import React from 'react';

const ButtSizeSelector = ({ buttSize, setButtSize }) => {
    return (
        <div>
            <h3>Select Butt Size:</h3>
            <select value={buttSize} onChange={(e) => setButtSize(e.target.value)}>
                <option value="small">Small</option>
                <option value="sporty">Sporty</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
            </select>
        </div>
    );
};

export default ButtSizeSelector;
