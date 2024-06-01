import { createBrowserRouter } from 'react-router-dom';
import Trade from '../pages/Trade';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Trade />,
  },
]);

export default router;
