import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Login from './authentication/Login'
import Drawer from './components/Drawer'
import Dashboard from './pages/Dashboard'
import Enquiry from './pages/Enquiry'
import EnquiryDetails from './pages/EnquiryDetails'
import Followups from './pages/Followups'
import Customer from './pages/Customer'
import UserManagement from './pages/UserManagement'
import UserDetails from './pages/UserDetails'
import Notification from './pages/Notification'
import ChangePassword from './pages/ChangePassword'
import RoutesProtector from './authentication/RoutesProtector'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route path='/' element={<Login />} />

      {/* Protected Routes */}
      <Route element={<RoutesProtector />}>
        <Route path='dashboard' element={<Drawer />}>
          <Route path='home' element={<Dashboard />} />
          <Route path='enquiry' element={<Enquiry />} />
          <Route path='follow-up' element={<Followups />} />
          <Route path='enquiries/:encodedId' element={<EnquiryDetails />} />
          <Route path='customer' element={<Customer />} />
          <Route path='notifications' element={<Notification />} />
          <Route path='user-management' element={<UserManagement />} />
          <Route path='user-management/user-details/:encodedId' element={<UserDetails />} />
          <Route path='change-password' element={<ChangePassword />} />
        </Route>
      </Route>

    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
