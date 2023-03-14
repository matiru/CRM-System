import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './auth-components/login-page';
import Dashboard from './dashboards/dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/dashboard'} element={<Dashboard/>} />
        
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
