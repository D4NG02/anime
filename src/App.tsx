import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import reducer, { state } from './Utility/Reducer/reducer';
import { StateProvider } from './Utility/Reducer/StateProvider';
import Home from "./page/Home";
import Search from "./page/Search";
import Detail from "./page/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/detail/:title",
    element: <Detail />
  },
]);

function App() {
  return (
    <StateProvider state={state} reducer={reducer}>
      <RouterProvider router={router} />
      <Outlet />
    </StateProvider>
  );
}

export default App;
