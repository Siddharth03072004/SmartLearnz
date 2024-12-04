import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState} from 'react';
import Navbar from './components/Navbar';
import Help from './components/Help';

import Alert from './components/Alert';
import Spinner from './components/Spinner';
import Learn from './components/Learn';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Converter from './components/Converter';
import Home from './components/Home';
import "./App.css";
import Analyze from './components/Analyze';
import C from './components/C';
import Quiz from './components/Quiz';
import Java from './components/Java';
import Python from './components/Python';


const App = () => {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setLoading={setLoading} />
        <Alert alert={alert} />
        {loading && <Spinner/>}
        <div className=''>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/learn" element={ <Learn/>} />
            <Route exact path="/landing" element={ <Landing/>} />
            <Route exact path="/converter" element={ <Converter/>} /> 
            <Route exact path="/help" element={ <Help/>} />
            <Route exact path="/analysis" element={<Analyze/>} /> 
            <Route exact path="/c" element={<C/>} /> 
            <Route exact path="/quiz" element={<Quiz/>} />
            <Route exact path="/java" element={<Java/>} />
            <Route exact path="/python" element={<Python/>} />
          </Routes>
        </div>

        <Footer/>
      </Router>
    </>
  );
};

export default App;
