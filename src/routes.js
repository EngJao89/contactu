import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contacts from './pages/Contacts';
import Schedule from './pages/Schedule';

function RoutesApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;