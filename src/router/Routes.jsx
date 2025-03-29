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
    Component: Dashboard,
    // children: [{path: 'cart', Component: Cart}],
  },
]);

export default router;
