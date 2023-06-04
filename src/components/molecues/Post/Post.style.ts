import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  position: relative;
  &:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const Nickname = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;
export const UserLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  img {
    width: 3.5rem;
    border-radius: 50%;
  }
`;
export const PostContent = styled.div`
  margin-left: 4.5rem;
`;
export const PostImage = styled.div`
  width: 100%;
  max-width: 570px;
  max-height: 1100px;
  margin-top: 1rem;
  img {
    border-radius: 5%;
  }
`;
export const Interactions = styled.div`
  width: 80%;
  margin-left: 4.5rem;
  margin-top: 1rem;

  display: flex;
  gap: 5rem;
`;
export const InteractionElement = styled.div``;
export const InteractionIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const Comments = styled.div``;
export const CommentIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
