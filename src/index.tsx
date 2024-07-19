import App from './App';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import '@css/config.scss';
import '@css/Null.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
