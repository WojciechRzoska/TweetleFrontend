import { styled } from 'styled-components';

interface CompanyLogoProps {
  isWhite?: boolean;
  isBig?: boolean;
}
export const CompanyLogo = styled.h1<CompanyLogoProps>`
  color: ${({ isWhite, theme: { colors } }) =>
    isWhite ? colors.white : colors.mainGreen};
  font-size: ${({ isBig }) => (isBig ? '5rem' : '1.5rem')};
  font-weight: bold;
  font-family: 'Baloo 2', cursive;
`;
