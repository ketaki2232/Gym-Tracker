import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Layout from "./Components/Navigation/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
