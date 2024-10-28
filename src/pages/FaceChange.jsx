// stream-recorder-app/src/pages/FaceChange.jsx

import React, { useState } from 'react';
import EnhancedButton from '../components/EnhancedButton';

const FaceChange = () => {
    const [selectedFace, setSelectedFace] = useState('');

    const handleFaceChange = (face) => {
        setSelectedFace(face);
        // هنا يمكنك إضافة الكود لبدء تغيير الوجه
    };

    return (
        <div className="face-change">
            <h1>Change Face</h1>
            <div className="face-options">
                <EnhancedButton label="Smile" onClick={() => handleFaceChange('smile')} />
                <EnhancedButton label="Serious" onClick={() => handleFaceChange('serious')} />
                <EnhancedButton label="Surprised" onClick={() => handleFaceChange('surprised')} />
            </div>
            {selectedFace && <p>You have selected: {selectedFace}</p>}
        </div>
    );
};

export default FaceChange;
