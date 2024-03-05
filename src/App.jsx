import './App.css';
import { routes } from './router/router-data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='AppUp'>
    <Router>
      <Header />
      <div className='App'>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
        
      </Routes>   
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
