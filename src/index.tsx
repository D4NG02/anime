import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { CustomTheme } from './Utility/CustomTheme';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={CustomTheme}>
      <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
