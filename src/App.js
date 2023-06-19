import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Post from './components/Post'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Todo from './components/Todo'

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/post/:id" element={<Post/>} />
        <Route path="/gallery/:id" element={<Gallery/>} />
        <Route path="/todo/:id" element={<Todo/>} />
      </Routes>

  </Router>
  );
}

export default App;
