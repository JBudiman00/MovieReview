import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './main';
import MoviePage from './moviePage';

function App() {
  return (
      <Router>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/moviepage/:id' element={<MoviePage />} />
      </Routes>
      </Router>
  );
  }

export default App;
