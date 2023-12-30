import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapPage from '../pages/MapPage';
import Login from '../pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/MapPage' element={<MapPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;