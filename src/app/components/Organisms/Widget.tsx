"use client"

import { Search } from '@mui/icons-material';
import React from 'react';

import css from 'styled-jsx/css';
import theme from '~/app/styles/theme';

const styles = css`
  .widgets {
    flex: 0.35;
  }

  .widgets-search {
    display: flex;
    align-items: center;
    background-color: ${theme.colors.bg};
    padding: 12px;
    border-radius: 20px;
    margin: 12px 0 0 20px;
  }

  .widgets-search-icon {
    color: #eee;
  }

  .widgets-search-input {
    border: none;
    background-color: ${theme.colors.bg};
  }

  .widgets-container {
    margin: 16px 0 0 20px;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 20px;
  }

  .widgets-container-text {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Widgets = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className='widgets'>
        <div className='widgets-search'>
          <Search className='widgets-search-icon' />
          <input className='widgets-search-input' placeholder='キーワード検索' type='text' />
        </div>
        <div className='widgets-container'>
          <h2 className='widgets-container-text'>What is in your mind?</h2>
          {/* <TwitterTweetEmbed />
          <TwitterTimelineEmbed />
          <TwitterShareButton /> */}
        </div>
      </div>
    </>
  );
};

export default Widgets;
