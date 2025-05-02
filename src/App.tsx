import './App.css';
import MainContainer from './containers/MainContainer';
import reducer, { initialState } from './Utility/Reducer/reducer';
import { StateProvider } from './Utility/Reducer/StateProvider';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainContainer />
    </StateProvider>
  );
}

export default App;
