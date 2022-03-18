import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contacts from './pages/Contacts';
import ListContacts from './pages/ListContacts';

function RoutesApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/listcontacts" element={<ListContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;