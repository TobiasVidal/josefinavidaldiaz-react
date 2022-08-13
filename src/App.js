import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './content/css/normalize.css';
import './content/css/styles.css';
import Home from './pages/Home';
import Summer from './pages/Summer';
import Rose from './pages/Rose';
import Flickering from './pages/Flickering';
import LostAndFound from './pages/LostAndFound';
import Impressions from './pages/Impressions';
import Sommerregen from './pages/Sommerregen';
import Sketchbook from './pages/Sketchbook';
import Signs from './pages/Signs';
import NaturalScience from './pages/NaturalScience';
import { useEffect } from 'react';

function App() {
  
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  useEffect(() => {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) { return () => {}; }
    const onBackToTopBtnTransitionEnd = () => {
      if (backToTopBtn.style.opacity === "0") {
        backToTopBtn.style.visibility = 'hidden';
      }
    }
    const onWindowScroll = () => {
      if (document.documentElement.scrollTop > 800) {
        backToTopBtn.style.visibility = 'visible';
        backToTopBtn.style.opacity = '1';
      } else {
        backToTopBtn.style.opacity = '0';
      }
    }

    window.addEventListener('scroll', onWindowScroll);
    backToTopBtn.addEventListener('transitionend', onBackToTopBtnTransitionEnd);
    
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      backToTopBtn.removeEventListener('transitionend', onBackToTopBtnTransitionEnd);
    };
  }, []);

  return (
    <Router>
      <div id="app">
        <NavBar />
        <div className='site-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summer' element={<Summer />} />
            <Route path='/rose' element={<Rose />} />
            <Route path='/flickering' element={<Flickering />} />
            <Route path='/lostandfound' element={<LostAndFound />} />
            <Route path='/impressions' element={<Impressions />} />
            <Route path='/sommerregen' element={<Sommerregen />} />
            <Route path='/sketchbook' element={<Sketchbook />} />
            <Route path='/signs' element={<Signs />} />
            <Route path='/naturalscience' element={<NaturalScience />} />
          </Routes>
        </div>
      </div>
      <button id="back-to-top" type="button" onClick={backToTop}>Back to Top</button>
    </Router>
  );
}

export default App;
