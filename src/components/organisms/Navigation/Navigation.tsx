import React from 'react';
import { CompanyLogo } from 'components/atoms/CompanyLogo/CompanyLogo';
import { NavigationContainer, NavigationWrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <CompanyLogo isWhite> Tweetle </CompanyLogo>
      </NavigationContainer>
    </NavigationWrapper>
  );
};

export default Navigation;
