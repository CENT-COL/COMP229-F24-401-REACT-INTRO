import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Layout from './components/Layout';

const MainRouter = () => {
    return <div>
        <Layout />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
}

export default MainRouter;