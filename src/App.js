import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/Homepage';
import Header from './Component/Header/Header';
import Riview from './Component/Reviews/Review';
import DashBoard from './Component/Dashboard/DashBoard';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import FullReviews from './Component/FullReview/FullReviews';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/reviews' element={<FullReviews/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
