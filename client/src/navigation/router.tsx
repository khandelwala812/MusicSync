import { createBrowserRouter } from "react-router-dom"
import routes from "../config/routes"

import HomePage from "../pages/HomePage"
import SongPage from "../pages/SongPage"

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <HomePage/>
  },
  {
    path: routes.SONG,
    element: <SongPage/>
  }
])

export default router