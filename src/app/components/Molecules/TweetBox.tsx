'use client';

import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '~/app/data/firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e: React.FormEvent) => {
    // fireBaseのDBにデータ追加
    // addDoc()で追加可能。その際、stateを使用すると入力値をDBに格納可能
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'Rabit',
      username: 'Rabit Engineer',
      verified: true,
      text: tweetMessage,
      avatar: 'https://source.unsplash.com/random',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <Avatar />
        <input
          type='text'
          value={tweetMessage}
          placeholder="What's in your mind?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTweetMessage(e.target.value)}
        />
        <input
          type='text'
          value={tweetImage}
          placeholder="Image's URL"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTweetImage(e.target.value)}
        />
        <Button type='submit' onClick={sendTweet}>
          ポストする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

// 1. tweetMessage, tweetImageを状態変数として保持
// 2. 1をFireBaseと連携する
