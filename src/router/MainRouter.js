
// Component
import { Route, Routes } from 'react-router-dom';
import Index from '../component/main/Index';

// Style
import '../contents/css/main/router.scss';



const MainRouter = () => {
    return (
        <div id="main">
            <Routes>
                <Route path="/" element={<Index />}>
                </Route>
            </Routes>
        </div>
    )
}

export default MainRouter;