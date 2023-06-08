import Post from 'components/molecues/Post/Post';
import React, { useEffect, useState } from 'react';
import { IPost } from 'types/PostInterface';
import { AuthProvider } from 'hooks/useAuth';
import { Wrapper } from './PostBoard.style';

const PostBoard = () => {
  const { authApi } = AuthProvider();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    authApi()
      .get('api/v1/posts?users=true')
      .then((res) => {
        setPosts(res.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {posts.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </Wrapper>
  );
};

export default PostBoard;
