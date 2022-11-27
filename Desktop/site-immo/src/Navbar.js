import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil"
import Layout from './Layout';
import Test from './components/Test';
import Contact from './components/Contact';

const Navbar = () => {
    return (
        <div>
            
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Acceuil />} />
                <Route path="Test" element={<Test />}/>
                <Route path="Contact" element={<Contact />}/>
                </Route>  
            </Routes>
            </BrowserRouter>
            </div>
    
    );
};

export default Navbar;