import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import reducer, { state } from './Utility/Reducer/reducer';
import { StateProvider } from './Utility/Reducer/StateProvider';
import Home from "./page/Home";
import Search from "./page/Search";
import Detail from "./page/Detail";
import Header from "./containers/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header /><Home /></>
  },
  {
    path: "/search",
    element: <><Header /><Search /></>
  },
  {
    path: "/detail/:title",
    element: <><Header /><Detail /></>
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
