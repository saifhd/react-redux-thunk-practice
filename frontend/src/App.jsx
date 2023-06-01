import './App.css'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import AppLayout from './Layout/AppLayout';
import AuthHook from './Hooks/AuthHook';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path='/' element={<AuthHook />} > */}
            <Route path="/" element={<Home />}></Route>
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
