import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import css from 'styled-jsx/css';
import theme from '~/app/styles/theme';
import { PostProps } from '~/app/types/types';

const styles = css`
  .post {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid ${theme.colors.bg};
  }

  .post-avatar {
    padding: 16px;
  }

  .post-body-image {
    border-radius: 20px;
    width: 100%;
  }

  .post-body-header-description {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .post-body-header-text-heading {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .post-body-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .post-body-header-text-heading-icon {
    font-size: 12px;
    color: ${theme.colors.primary};
  }
`;

const Post = ({ displayName, username, verified, text, image, avatar }: PostProps) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className='post'>
        <div className='post-avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post-body'>
          <div className='post-body-header'>
            <div className='post-body-header-text'>
              <h3 className='post-body-header-text-heading'>
                {displayName}
                <span className='post-body-header-text-heading-icon'>
                  <VerifiedUser />@{username}
                </span>
              </h3>
            </div>
            <div className='post-body-header-description'>
              <p className='post-body-header-description-text'>{text}</p>
            </div>
          </div>
          <img className='post-body-image' src={image} />
          <div className='post-body-footer'>
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <PublishOutlined fontSize='small' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
