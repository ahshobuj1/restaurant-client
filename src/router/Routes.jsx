import {createBrowserRouter} from 'react-router';
import Home from '../pages/home/home/Home';
import Main from '../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [{path: '/', Component: Home}],
  },
]);

export default router;
