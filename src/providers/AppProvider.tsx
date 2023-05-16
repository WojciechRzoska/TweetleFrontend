import { GlobalStyle } from 'assets/styles/GlobalStyles.styles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
