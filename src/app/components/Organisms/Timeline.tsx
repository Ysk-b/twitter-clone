'use client';

import React from 'react';
import TweetBox from '../Molecules/TweetBox';

import css from 'styled-jsx/css';
import theme from '~/app/styles/theme';

const styles = css`
  .timeline {
    border-right: 1px solid ${theme.colors.bg};
    overflow-y: scroll;
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
      </div>
    </>
  );
};

export default Timeline;
