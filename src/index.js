import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from './Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={"loading"} persistor={persistor}>
            {/* <Routes>
              <Route path="/*" element={<App/>}/>
            </Routes> */}
            {/* <ScrollToTop> */}
              <App/>
            {/* </ScrollToTop> */}
            
          </PersistGate>
        </Provider>
      </AuthProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
