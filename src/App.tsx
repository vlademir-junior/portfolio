import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About/About';
import { Technologies } from './pages/Technologies/Technologies';
import { MyProjects } from './pages/MyProjects/MyProjects';
import { Contact } from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 80px)', paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
