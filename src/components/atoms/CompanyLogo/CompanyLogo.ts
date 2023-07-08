import { styled } from 'styled-components';

interface CompanyLogoProps {
  readonly iswhite?: boolean;
  readonly isBig?: boolean;
}
export const CompanyLogo = styled.h1<CompanyLogoProps>`
  color: ${({ iswhite, theme: { colors } }) =>
    iswhite ? colors.white : colors.mainGreen};
  font-size: ${({ isBig }) => (isBig ? '4.5rem' : '1.5rem')};
  font-weight: bold;
  font-family: 'Baloo 2', cursive;
`;
