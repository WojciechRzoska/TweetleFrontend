import React from 'react';
import { StyledButton } from 'components/atoms/Button/Button';
import { AuthProvider } from 'hooks/useAuth';
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
  const { signOut } = AuthProvider();
  return (
    <Wrapper>
      <StyledList>
        <NavItem>
          <StyledNavLink to="/">
            <LogoNav>Tweetle</LogoNav>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/test">
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
        <NavItem>
          <StyledButton
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </StyledButton>
        </NavItem>
      </StyledList>
    </Wrapper>
  );
};

export default SideMenu;
