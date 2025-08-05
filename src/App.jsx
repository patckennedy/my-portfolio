// src/App.jsx
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <Navbar />
            <main>
                <Home />
                <Projects />
                <About />
                <Contact />
                
            </main>
            <Footer />
        </div>
    );
}

export default App;
