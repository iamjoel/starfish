import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import route from './route'

const router = createHashRouter(route)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
