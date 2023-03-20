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
import UserTable from "./users/users-table";
import ProductForm from "./products/add-product";
import Sales from "./sales/sales-page";
import MakeSale from "./sales/make-sale";
import SalesTable from "./sales/sales-table";
import Profile from "./profile/profile";
import EditProfileForm from "./profile/edit-profile";
import ProfileView from "./profile/view-profile";
import Reports from "./reports/report";
import MonthlyChart from "./reports/monthly";
import QuarterlySales from "./reports/quaterly";
import YearlySales from "./reports/yearly";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />

          <Route path="/admin-dashboard" element={<AdminDashBoard />}>
            <Route path="dashboard" element={<DashboardContent />} />

            <Route path="reports" element={<Reports/>} >
              <Route index path="" element={<MonthlyChart/>} />
              <Route path="" element={<MonthlyChart/>} />
              <Route path="quaterly" element={<QuarterlySales/>} />
              <Route path="yearly" element={<YearlySales/>} />


            </Route>

            <Route path="products" element={<Products />}>
              <Route index path="" element={<ProductTable />} />
              <Route path="" element={<ProductTable />} />
              <Route path="addproduct"  element ={<ProductForm/>}/>
            </Route>

            <Route path="profile" element={<Profile />}>
              <Route index path="" element={<ProfileView/>} />
              <Route path="" element={<ProfileView />} />
              <Route path="editprofile" element={<EditProfileForm/>} />
            </Route>

            <Route path="users" element={<Users/>} >
              <Route index element={<UserTable/>}/>
              <Route path=""element={<UserTable/>} />
              <Route path="addcustomer" element= {<CreateCustomer/>} />
              <Route path="addemployee" element={<CreateStaff/>} />

            </Route>




            <Route path="sales" element = {<Sales/>}  >
              <Route index path="" element={<SalesTable/>} />
              <Route path=""element={<SalesTable/>} />
              <Route path="addsale" element ={<MakeSale/>}/>

            </Route>
            <Route path="settings" />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
