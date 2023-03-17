import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth-components/login-page";
import DashboardContent from "./dashboards/dashboard-content";
import Products from "./products/products";
import ProductTable from "./products/products-listing";
import AdminDashBoard from "./dashboards/adminDashBoard";
import StaffDashBoard from "./dashboards/staffdashboard";
import Users from "./users/users";
import CreateStaff from "./users/create-staff";
import CreateCustomer from "./users/create-customer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />

          <Route path="/admin-dashboard" element={<AdminDashBoard />}>
            <Route path="dashboard" element={<DashboardContent />} />

            <Route path="reports" />

            <Route path="products" element={<Products />}>
              <Route index path="" element={<ProductTable />} />
              <Route path="" element={<ProductTable />} />
              <Route path="addproduct" />
            </Route>

            <Route path="users" element={<Users/>} >

              <Route index path="users-table"/>
              <Route path="users-table" />
              <Route path="addcustomer" element= {<CreateCustomer/>} />
              <Route path="addemployee" element={<CreateStaff/>} />
            </Route>




            <Route path="sales" />
            <Route path="settings" />
          </Route>

          <Route path="/staff-dashboard" element={<StaffDashBoard />}>
            <Route path="dashboard" element={<DashboardContent />} />
            <Route path="products" element={<Products />}>
              <Route index path="" element={<ProductTable />} />
              <Route path="" element={<ProductTable />} />
              <Route path="addproduct" />
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
