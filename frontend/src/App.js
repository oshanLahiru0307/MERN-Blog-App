import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../src/Components/Login'
import Register from '../src/Components/Register'
import Home from '../src/Components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
