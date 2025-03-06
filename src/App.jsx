import React from 'react'
import { Provider } from 'react-redux';
import { SocketProvider } from './context/SocketContext';
import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <Provider store={store}>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </Provider>
  )
};
