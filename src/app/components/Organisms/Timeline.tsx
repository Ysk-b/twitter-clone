'use client';

import React from 'react';
import TweetBox from '../Molecules/TweetBox';

import css from 'styled-jsx/css';
import theme from '~/app/styles/theme';
import Post from '../Molecules/Post';

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

// TODO
// コンポーネント分割
const Timeline = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className='timeline'>
        <div className='timeline-header'>
          <h2 className='timeline-header-text'>HOME</h2>
        </div>
        <TweetBox />
        <Post
          displayName='Koala'
          username='Koala Engineer'
          verified={true}
          text='First Tweet'
          avatar='https://source.unsplash.com/random'
          image='https://source.unsplash.com/random'
        />
      </div>
    </>
  );
};

export default Timeline;
