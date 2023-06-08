import { GlobalStyle } from 'assets/styles/GlobalStyles.styles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AuthProvider } from 'hooks/useAuth';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
