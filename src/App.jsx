import './assets/css/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import {Outlet, RouterProvider} from 'react-router-dom'
import ProjectRouter from './components/router/ProjectRouter';

function App() {

  return (
    <>
      <RouterProvider router={ProjectRouter} />
    </>
  );
}

export default App;
