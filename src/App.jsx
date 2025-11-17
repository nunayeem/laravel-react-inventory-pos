import './assets/css/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { RouterProvider } from 'react-router-dom'
import ProjectRouter from './components/router/ProjectRouter'
import AuthRouter from './components/router/AuthRouter'
import { useState } from 'react'

function App() {
  const [auth, setAuth] = useState(false)   // false = show login

  // Choose router based on auth state
  const activeRouter = auth ? ProjectRouter : AuthRouter

  return <RouterProvider router={activeRouter} />
}

export default App
