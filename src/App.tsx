import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About } from './pages/About/About';
import { Technologies } from './pages/Technologies/Technologies';
import { MyProjects } from './pages/MyProjects/MyProjects';
import { Contact } from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
