import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompanyLogo } from 'components/atoms/CompanyLogo/CompanyLogo';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.nav`
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.mainGreen};
  z-index: 10;

  @media (min-width: 39em) {
    width: 6rem;
    height: 100dvh;
    top: 0;
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.mainGreen};
  }
  @media (min-width: 57em) {
    width: 10rem;
  }
`;
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (min-width: 39em) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
`;
export const NavItem = styled.li`
  width: 100%;
  &:first-child {
    display: none;
  }
  @media (min-width: 39em) {
    &:first-child {
      display: block;
    }
    width: auto;
  }

  /* :last-child {
    margin-top: auto;
  } */
`;
export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;
export const LogoNav = styled(CompanyLogo)`
  font-size: 1.3rem;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  transition: 600ms;
  &:hover {
    filter: grayscale(0%) opacity(1);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  @media (min-width: 39em) {
    justify-content: flex-start;
    height: 2rem;
    padding: 1.4rem 1rem;
    border-bottom-left-radius: 30% 100%;
    border-bottom-right-radius: 30% 100%;
    border-top-left-radius: 30% 100%;
    border-top-right-radius: 30% 100%;
    justify-content: center;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 2rem;
  min-height: 2rem;
`;
export const LinkText = styled.span`
  display: none;
  margin-left: 1rem;
  @media (min-width: 57em) {
    display: inline;
  }
`;
