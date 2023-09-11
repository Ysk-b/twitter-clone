import React from 'react';

const SidebarOption = ({ text, Icon }) => {
  return (
    <ul className='sidebar-option'>
      <li className='sidebar-option-list'>
        <Icon />
        <h2>{text}</h2>
      </li>
    </ul>
  );
};

export default SidebarOption;
