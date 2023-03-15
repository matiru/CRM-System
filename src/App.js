import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './auth-components/login-page';
import DashBoard from './dashboards/dashboard';
import DashboardContent from './dashboards/dashboard-content';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        


        <Route path="/dashboard" element={<DashBoard />}>
        <Route index  path ="dashboard"element={<DashboardContent/>} />
        <Route path='' element={<DashboardContent/>}/>
        <Route path='reports' />
        <Route path='products' />
        <Route path='users'/>
        <Route path='sales'/>
        <Route path='settings'/>
        </Route>





        
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
