'use client';

import React from 'react';
import SidebarOption from '../Molecules/SidebarOption';
import css from 'styled-jsx/css';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import theme from '~/app/styles/theme';

const styles = css`
  .sidebar {
    border-right: 1px solid ${theme.colors.bg};
    max-width: 250px;
    margin-top: 20px;
    padding: 0 20px;
  }

  .sidebar > :global(.sidebar-twitter-icon) {
    color: ${theme.colors.primary};
    font-size: 30px;
    margin: 0 0 20px 20px;
  }

  .sidebar > :global(.sidebar-btn) {
    background-color: ${theme.colors.primary};
    color: #fff;
    font-weight: 900;
    border: none;
    border-radius: 30px;
    padding: 12px 24px;
    width: 100%;
    margin-top: 20px;
    transition: all .3s;
  }

  .sidebar > :global(.sidebar-btn:hover) {
    opacity: 0.7;
  }
`;

const SideBar = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className='sidebar'>
        <TwitterIcon className='sidebar-twitter-icon' />
        <SidebarOption text='ホーム' Icon={HomeIcon} />
        <SidebarOption text='話題を検索' Icon={SearchIcon} />
        <SidebarOption text='通知' Icon={NotificationsNoneIcon} />
        <SidebarOption text='メッセージ' Icon={MailOutlineIcon} />
        <SidebarOption text='ブックマーク' Icon={BookmarkBorderIcon} />
        <SidebarOption text='リスト' Icon={ListAltIcon} />
        <SidebarOption text='プロフィール' Icon={PermIdentityIcon} />
        <SidebarOption text='もっとみる' Icon={MoreHorizIcon} />
        <Button variant='outlined' className='sidebar-btn'>
          ポストする
        </Button>
      </div>
    </>
  );
};

export default SideBar;
