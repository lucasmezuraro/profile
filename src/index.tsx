import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/index';
import {Provider} from 'react-redux';
import store from './store';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_ptbr from "./translations/ptbr/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, 
  lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            ptbr: {
                common: common_ptbr
            },
        }, // React already does escaping
});


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <Main />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
