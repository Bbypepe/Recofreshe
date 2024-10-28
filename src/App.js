import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PhotoEditor from './pages/PhotoEditor';
import VideoEditor from './pages/VideoEditor';
import ClothingChange from './pages/ClothingChange'; // Import Clothing Change component
import ClothingDisplay from './components/ClothingDisplay'; // Import Clothing Display component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content"> {/* Added a main content area for better layout */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/photo-editor" element={<PhotoEditor />} />
            <Route path="/video-editor" element={<VideoEditor />} />
            <Route path="/clothing-change" element={<ClothingChange />} /> {/* Clothing Change route */}
            <Route path="/clothing-display" element={<ClothingDisplay selectedClothing="casual" />} /> {/* Clothing Display route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
