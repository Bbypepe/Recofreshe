// src/components/EnhancedButton.jsx

import React from 'react';

const EnhancedButton = ({ label, onClick, style }) => {
    return (
        <button onClick={onClick} style={style} className="enhanced-button">
            {label}
        </button>
    );
};

export default EnhancedButton;
