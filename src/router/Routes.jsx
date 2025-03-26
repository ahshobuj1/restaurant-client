import {createBrowserRouter} from 'react-router';
import Home from '../pages/home/home/Home';
import Main from '../layout/Main';
import Menu from '../pages/menu/menu/Menu';
import Shop from '../pages/shop/shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {path: '/', Component: Home},
      {path: 'menu', Component: Menu},
      {path: 'shop', Component: Shop},
    ],
  },
]);

export default router;
