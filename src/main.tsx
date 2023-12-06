import App from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'utils/initDataBase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
