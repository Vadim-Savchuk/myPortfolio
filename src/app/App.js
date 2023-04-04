import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home  from '../pages/home/Home';
import Works from '../pages/works/Works';

import './App.scss';

function App() {
    return (
        <BrowserRouter basename='/myPortfolio/'>
            <Routes>
                <Route path='/'      element={<Home />} />
                <Route path='/works' element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
