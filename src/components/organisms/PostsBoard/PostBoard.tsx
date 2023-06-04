import Post from 'components/molecues/Post/Post';
import React, { useEffect, useState } from 'react';
import { IPost } from 'types/PostInterface';
import axios from 'axios';
import { Wrapper } from './PostBoard.style';

const PostBoard = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:80/api/v1/posts?users=true').then((res) => {
      setPosts(res.data.data);
    });
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
