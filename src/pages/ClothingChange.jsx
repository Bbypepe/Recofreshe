// stream-recorder-app/src/pages/ClothingChange.jsx

import React, { useState } from 'react';
import EnhancedButton from '../components/EnhancedButton';
import ClothingDisplay from '../components/ClothingDisplay';

const ClothingChange = () => {
    const [selectedClothing, setSelectedClothing] = useState('');

    const handleClothingChange = (clothing) => {
        setSelectedClothing(clothing);
    };

    return (
        <div className="clothing-change">
            <h1>Change Clothing</h1>
            <div className="clothing-options">
                <EnhancedButton label="Casual Outfit" onClick={() => handleClothingChange('casual')} />
                <EnhancedButton label="Formal Outfit" onClick={() => handleClothingChange('formal')} />
                <EnhancedButton label="Sport Outfit" onClick={() => handleClothingChange('sport')} />
            </div>
            {selectedClothing && (
                <div className="clothing-display">
                    <ClothingDisplay selectedClothing={selectedClothing} />
                </div>
            )}
        </div>
    );
};

export default ClothingChange;
