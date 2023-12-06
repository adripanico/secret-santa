import i18Next from 'i18n/i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from 'store/store';

import { EntryPoint } from './EntryPoint';

import './App.scss';

const App = () => {
  return (
    <I18nextProvider i18n={i18Next}>
      <Provider store={store}>
        <EntryPoint />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
