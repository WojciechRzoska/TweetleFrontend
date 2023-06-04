import React, { PropsWithChildren } from 'react';
import SideMenu from 'components/organisms/SideMenu/SideMenu';
import RecommendedSide from 'components/organisms/RecommendedSide/RecommendedSide';
import { TemplateWrapper, Wrapper } from './MainTemplate.style';

const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <TemplateWrapper>
      <SideMenu />
      <Wrapper>{children}</Wrapper>
      <RecommendedSide />
    </TemplateWrapper>
  );
};

export default MainTemplate;
