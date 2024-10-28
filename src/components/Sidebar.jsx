// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/clothing-change">Clothing Change</Link></li>
                <li><Link to="/photo-editor">Photo Editor</Link></li>
                <li><Link to="/video-editor">Video Editor</Link></li>
                <li><Link to="/face-change">Face Change</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
