import React from 'react'
import TweetBox from '../Molecules/TweetBox'

// TODO
// コンポーネント分割
const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='timeline-header'>
        <h2>HOME</h2>
      </div>
      <TweetBox />
    </div>
  )
}

export default Timeline