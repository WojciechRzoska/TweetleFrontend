import React, { PropsWithChildren } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
