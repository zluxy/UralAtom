import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './screens/UralAtomMainPage/UralAtomMainPage';
import Katalog from './screens/KatalogProduksii/KatalogProduksii';
import Contacts from './screens/Kontaktnaya/Kontaktnaya';
import News from './screens/NovostiPage/NovostiPage';
import About from './screens/ONasPage/ONasPage';
import Replyes from './screens/ZayavkaPage/ZayavkaPage';

export default function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Katalog/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/reply' element={<Replyes/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}
