'use client';

import css from 'styled-jsx/css';
import { useEffect, useState } from 'react';

import Post from '../Molecules/Post';
import TweetBox from '../Molecules/TweetBox';

import { PostProps } from '~/app/types/types';
import theme from '~/app/styles/theme';

import db from '~/app/data/firebase';
import { collection, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';

const styles = css`
  .timeline {
    border-right: 1px solid ${theme.colors.bg};
    overflow-y: scroll;
    flex: 1;
  }

  .timeline::-webkit-scrollbar {
    display: none;
  }

  .timeline-header {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
    border: 1px solid ${theme.colors.bg};
    padding: 4px 20px;
  }

  .timeline-header-text' {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Timeline = () => {
  // 更新関数setPostsに格納 → 状態変数postsに値が流れ込む
  // postsからmapで値を出力する
  const [posts, setPosts] = useState<PostProps[]>([]);

  // Make it render once ONLY when it's mounted.
  useEffect(() => {
    // db: Initialized FireStore
    // "posts": Colleciton Name
    const postData = collection(db, 'posts');
    const modPostData = query(postData, orderBy("timestamp", "desc"));

    // getDocs(modPostData).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータ取得
    onSnapshot(modPostData, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <style jsx>{styles}</style>
      <div className='timeline'>
        <div className='timeline-header'>
          <h2 className='timeline-header-text'>HOME</h2>
        </div>
        <TweetBox />
        {posts.map((post) => {
          return (
            <Post
              key={post.displayName}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          );
        })}
        ;
      </div>
    </>
  );
};

export default Timeline;
