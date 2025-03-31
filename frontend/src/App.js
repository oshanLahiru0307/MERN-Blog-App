import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../src/Components/Login'
import Register from '../src/Components/Register'
import Home from '../src/Components/Home'
import MyPosts from './Components/MyPosts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/myposts' element={<MyPosts/>}/>
          <Route path='/myProfile' element={<MyPosts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
