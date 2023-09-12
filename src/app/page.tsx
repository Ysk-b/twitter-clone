import React from 'react';
import SideBar from './components/Organisms/SideBar';
import Timeline from './components/Organisms/Timeline';
import Widgets from './components/Organisms/Widget';

const App = () => {
  return (
    <div className='app'>
      <SideBar />
      <Timeline />
      <Widgets />
    </div>
  );
};

export default App;
