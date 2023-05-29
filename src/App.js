
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';



function App() {
  return (
    <div className="container" >
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/update' element={<Update />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
