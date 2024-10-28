// src/components/BodyTypeSelector.jsx

import React from 'react';

const BodyTypeSelector = ({ selectedBodyType, onChange }) => {
    const bodyTypes = ['Slim', 'Athletic', 'Average', 'Overweight', 'Obese'];

    return (
        <div>
            <h3>Select Body Type:</h3>
            <select value={selectedBodyType} onChange={(e) => onChange(e.target.value)}>
                {bodyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};

export default BodyTypeSelector;
