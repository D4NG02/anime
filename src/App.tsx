import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AppbarContainer from './containers/AppbarContainer';
import MainContainer from './containers/MainContainer';
import reducer, { initialState } from './Utility/Reducer/reducer';
import { StateProvider } from './Utility/Reducer/StateProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
]);

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppbarContainer />

      <RouterProvider router={router} />
      <Outlet />
    </StateProvider>
  );
}

export default App;
