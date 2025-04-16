import {createBrowserRouter} from 'react-router';
import Home from '../pages/home/home/Home';
import Main from '../layout/Main';
import Menu from '../pages/menu/menu/Menu';
import Shop from '../pages/shop/shop/Shop';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/SignUp';
import Private from '../pages/private/Private';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layout/Dashboard';
import Cart from '../pages/dashboard/users/cart/cart';
import AllUsers from '../pages/dashboard/admin/allUsers/AllUsers';
import AdminRoute from './AdminRoute';
import AddItems from '../pages/dashboard/admin/addItems/AddItems';
import ManageItems from '../pages/dashboard/admin/manageItems/ManageItems';
import UpdateItems from '../pages/dashboard/admin/updateItems/UpdateItems';
import StripePayment from '../pages/dashboard/users/stripePayment/StripePayment';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {path: '/', Component: Home},
      {path: 'menu', Component: Menu},
      {path: 'shop/:category', Component: Shop},
      {path: 'login', Component: Login},
      {path: 'signup', Component: SignUp},
      {
        path: 'private',
        element: (
          <PrivateRoute>
            <Private />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //* User Routes
      {path: 'cart', element: <Cart />},
      {path: 'payment', element: <StripePayment />},

      //* Admin Routes
      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'addItems',
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: 'manageItems',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: 'updateItem/:id',
        element: (
          <AdminRoute>
            <UpdateItems />
          </AdminRoute>
        ),
        loader: ({params}) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
