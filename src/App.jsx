import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./authentication/Login";
import Drawer from "./components/Drawer";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import EnquiryDetails from "./pages/EnquiryDetails";
import Followups from "./pages/Followups";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path='/' element={<Login/>}/>
    <Route path='drawer' element={<Drawer/>}>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='students' element={<Students/>}/>
    <Route path='courses' element={<Followups/>}/>
    <Route path='enquiry-details' element={<EnquiryDetails/>}/>

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
