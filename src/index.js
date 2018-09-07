import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';
// import {addToCart} from './state/cart/actions';

const store = configureStore({  });

// store.dispatch(addToCart(' 599598acb5211750d129dd50', 6));    

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  
  registerServiceWorker();
