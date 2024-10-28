// stream-recorder-app/src/components/TattooToggle.jsx

import React from 'react';

const TattooToggle = ({ hasTattoo, toggleTattoo }) => {
    return (
        <div>
            <h3>Tattoo:</h3>
            <button onClick={toggleTattoo}>
                {hasTattoo ? "Remove Tattoo" : "Add Tattoo"}
            </button>
        </div>
    );
};

export default TattooToggle;
