import { Avatar, Button } from '@mui/material'
import React from 'react'

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <Avatar />
        <input type="text" placeholder="What's in your mind?" />
        <input type="text" placeholder="Image's URL" />
        <Button>ポストする</Button>
      </form>
    </div>
  )
}

export default TweetBox