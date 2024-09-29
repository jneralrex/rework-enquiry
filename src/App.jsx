import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./authentication/Login";
import Drawer from "./components/Drawer";
import Dashboard from "./pages/Dashboard";
import Enquiry from "./pages/Enquiry";
import EnquiryDetails from "./pages/EnquiryDetails";
import Followups from "./pages/Followups";
import Customer from "./pages/Customer";
import UserManagement from "./pages/UserManagement";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login />} />
      <Route path='drawer' element={<Drawer />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='enquiry' element={<Enquiry />} />
        <Route path='follow-up' element={<Followups />} />
        <Route path='enquiry-details' element={<EnquiryDetails />} />
        <Route path='customer' element={<Customer />} />
        <Route path='user-management' element={<UserManagement />} />
        <Route path='user-management/user-details' element={<UserDetails />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
