import PostBoard from 'components/organisms/PostsBoard/PostBoard';
import RecommendedSide from 'components/organisms/RecommendedSide/RecommendedSide';
import { Wrapper } from './MainBoard.style';

const MainBoard = () => {
  return (
    <Wrapper>
      <PostBoard />
    </Wrapper>
  );
};

export default MainBoard;
