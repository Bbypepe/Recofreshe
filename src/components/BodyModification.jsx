import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BodyModification.css';

const BodyModification = ({ onModificationChange }) => {
  const [bodyType, setBodyType] = useState('normal');
  const [modifications, setModifications] = useState([]);

  const handleBodyTypeChange = (event) => {
    setBodyType(event.target.value);
    onModificationChange(event.target.value, modifications);
  };

  const handleModificationChange = (modification) => {
    setModifications((prevModifications) => {
      const newModifications = prevModifications.includes(modification)
        ? prevModifications.filter((m) => m !== modification)
        : [...prevModifications, modification];
      onModificationChange(bodyType, newModifications);
      return newModifications;
    });
  };

  return (
    <div className="body-modification">
      <h2>Select Your Body Type</h2>
      <div className="body-type-selector">
        <label>
          <input
            type="radio"
            value="normal"
            checked={bodyType === 'normal'}
            onChange={handleBodyTypeChange}
          />
          Normal
        </label>
        <label>
          <input
            type="radio"
            value="athletic"
            checked={bodyType === 'athletic'}
            onChange={handleBodyTypeChange}
          />
          Athletic
        </label>
        <label>
          <input
            type="radio"
            value="slim"
            checked={bodyType === 'slim'}
            onChange={handleBodyTypeChange}
          />
          Slim
        </label>
        <label>
          <input
            type="radio"
            value="curvy"
            checked={bodyType === 'curvy'}
            onChange={handleBodyTypeChange}
          />
          Curvy
        </label>
      </div>

      <h2>Select Modifications</h2>
      <div className="modifications">
        <label>
          <input
            type="checkbox"
            value="tattoos"
            checked={modifications.includes('tattoos')}
            onChange={() => handleModificationChange('tattoos')}
          />
          Tattoos
        </label>
        <label>
          <input
            type="checkbox"
            value="piercings"
            checked={modifications.includes('piercings')}
            onChange={() => handleModificationChange('piercings')}
          />
          Piercings
        </label>
        <label>
          <input
            type="checkbox"
            value="surgery"
            checked={modifications.includes('surgery')}
            onChange={() => handleModificationChange('surgery')}
          />
          Surgery
        </label>
      </div>
    </div>
  );
};

BodyModification.propTypes = {
  onModificationChange: PropTypes.func.isRequired,
};

export default BodyModification;
