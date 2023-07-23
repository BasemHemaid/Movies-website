import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import MoviesDetail from './Pages/Movie-detail/movieDetail';
import Movies from './Pages/Movies/movies';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Movies/>} />
      <Route path='/movie/:id' element={<MoviesDetail/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
