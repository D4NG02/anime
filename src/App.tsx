import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import reducer, { initialState } from './Utility/Reducer/reducer';
import { StateProvider } from './Utility/Reducer/StateProvider';
import Header from './containers/Header';
import Home from "./page/Home";
import Search from "./page/Search";
import Detail from "./page/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "search",
    element: <Search />
  },
  {
    path: "detail/:title",
    element: <Detail />
  },
]);

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />

      <RouterProvider router={router} />
      <Outlet />
    </StateProvider>
  );
}

export default App;
