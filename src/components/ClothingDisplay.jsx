// stream-recorder-app/src/components/ClothingDisplay.jsx

import React, { useState } from 'react';
import BodyTypeSelector from './BodyTypeSelector';
import ChestSizeSelector from './ChestSizeSelector';
import ButtSizeSelector from './ButtSizeSelector';
import HairColorSelector from './HairColorSelector';
import TattooToggle from './TattooToggle';

const ClothingDisplay = ({ selectedClothing }) => {
    const [bodyType, setBodyType] = useState('average');
    const [chestSize, setChestSize] = useState('medium');
    const [buttSize, setButtSize] = useState('medium');
    const [hairColor, setHairColor] = useState('black');
    const [hasTattoo, setHasTattoo] = useState(false);

    const toggleTattoo = () => {
        setHasTattoo(!hasTattoo);
    };

    return (
        <div className="clothing-display">
            <h2>Current Outfit: {selectedClothing}</h2>
            {selectedClothing && (
                <img 
                    src={`public/assets/${selectedClothing}-${bodyType}-${chestSize}-${buttSize}-${hairColor}-${hasTattoo ? 'tattoo' : 'no-tattoo'}.jpg`} 
                    alt={`${selectedClothing} outfit`} 
                    style={{ width: '300px', height: '400px' }} 
                />
            )}
            <BodyTypeSelector bodyType={bodyType} setBodyType={setBodyType} />
            <ChestSizeSelector chestSize={chestSize} setChestSize={setChestSize} />
            <ButtSizeSelector buttSize={buttSize} setButtSize={setButtSize} />
            <HairColorSelector hairColor={hairColor} setHairColor={setHairColor} />
            <TattooToggle hasTattoo={hasTattoo} toggleTattoo={toggleTattoo} />
        </div>
    );
};

export default ClothingDisplay;
