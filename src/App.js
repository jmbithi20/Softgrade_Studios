import logo from './logo.svg';
import React, { Suspense } from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Loading from './Components/Loading';

const Home = React.lazy (()=> import('./Components/Home'));

function App() {
  return (
    <div className="App">
     <Router>
      <Suspense fallback = {<Loading/>}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>






      </Routes>
     </Router>
    </div>
  );
}

export default App;
