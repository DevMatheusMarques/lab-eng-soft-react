import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/home" exact component={Home} />
            <Route path="/exercicio1/data-hora" component={Data} />
          </Routes>
      </BrowserRouter>
  );
}


export default App;
