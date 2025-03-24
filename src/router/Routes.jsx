import {createBrowserRouter} from 'react-router';
import Home from '../pages/home/home/Home';
import Main from '../layout/Main';
import Menu from '../pages/menu/menu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {path: '/', Component: Home},
      {path: 'menu', Component: Menu},
    ],
  },
]);

export default router;
