import React from 'react';
import { CompanyLogo } from 'components/atoms/CompanyLogo/CompanyLogo';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {
  NavItem,
  StyledNavLink,
  StyledList,
  Wrapper,
  StyledFontAwesomeIcon,
  LinkText,
  LogoNav,
} from './SideMenu.style';

const SideMenu = () => {
  return (
    <Wrapper>
      <StyledList>
        <NavItem>
          <StyledNavLink to="/">
            <LogoNav>Tweetle</LogoNav>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <StyledFontAwesomeIcon icon={faHouse} />
            <LinkText>Link</LinkText>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <StyledFontAwesomeIcon icon={faHouse} />
            <LinkText>Link</LinkText>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <StyledFontAwesomeIcon icon={faHouse} />
            <LinkText>Link</LinkText>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <StyledFontAwesomeIcon icon={faHouse} />
            <LinkText>Link</LinkText>
          </StyledNavLink>
        </NavItem>
      </StyledList>
    </Wrapper>
  );
};

export default SideMenu;
