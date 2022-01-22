import {Routes, Route} from 'react-router';
import MainRouter from './router/MainRouter';

// Font
import './contents/fonts/Montserrat.css';
import './contents/fonts/AppleSDGothicNeo.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRouter />}>
        
      </Route>
    </Routes>
  )
}

export default App;
