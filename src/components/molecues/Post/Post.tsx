import React from 'react';
import { IPost } from 'types/PostInterface';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import {
  InteractionElement,
  InteractionIcon,
  Interactions,
  Nickname,
  PostContent,
  PostImage,
  UserLabel,
  Wrapper,
} from './Post.style';

interface ComponentProps {
  postData: IPost;
}
const Post: React.FC<ComponentProps> = ({
  postData: { photo, content, user },
}) => {
  return (
    <Wrapper>
      <UserLabel>
        <img src={user?.avatar} alt="avatar" />
        <Nickname>{user?.nickname}</Nickname>
      </UserLabel>
      <PostContent>
        {content}
        <PostImage>
          <img src={photo} alt="a" />
        </PostImage>
      </PostContent>

      <Interactions>
        <InteractionElement>
          <InteractionIcon icon={faHeart} />
          <span>5</span>
        </InteractionElement>
        <InteractionElement>
          <InteractionIcon icon={faMessage} />
          <span>2</span>
        </InteractionElement>
        <InteractionElement>
          <InteractionIcon icon={faShare} />
          <span>2</span>
        </InteractionElement>
      </Interactions>
    </Wrapper>
  );
};

export default Post;
