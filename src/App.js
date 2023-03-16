import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth-components/login-page";
import DashboardContent from "./dashboards/dashboard-content";
import Products from "./products/products";
import ProductTable from "./products/products-listing";
import AdminDashBoard from "./dashboards/adminDashBoard";
import StaffDashBoard from "./dashboards/staffdashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />

          <Route path="/admin-dashboard" element={<AdminDashBoard />}>
            <Route index path="dashboard" element={<DashboardContent />} />
            <Route path="" element={<DashboardContent />} />

            <Route path="reports" />

            <Route path="products" element={<Products />}>
              <Route index path="products-table" element={<ProductTable />} />
              <Route path="" element={<ProductTable />} />
            </Route>

            <Route path="users" />
            <Route path="sales" />
            <Route path="settings" />
          </Route>

          <Route path="/staff-dashboard" element={<StaffDashBoard/>}>
            <Route index path="dashboard" element={<DashboardContent />} />
            <Route path="" element={<DashboardContent />} />
            <Route path="products" element={<Products />}>
              <Route index path="products-table" element={<ProductTable />} />
              <Route path="" element={<ProductTable />} />
            </Route>
            <Route path="customers" />
            <Route path="sales" />
            <Route path="settings" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
