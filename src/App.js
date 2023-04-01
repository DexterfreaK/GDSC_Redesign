import './App.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import BITSPilani from './BITSPilani';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/bits' element={<BITSPilani />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
