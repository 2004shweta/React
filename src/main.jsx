import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <App />
    </Provider>
  </StrictMode>
);
