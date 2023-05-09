import React from 'react';
import { nav_icons } from './data';

function NavIcons({ parentClass, itemClass }) {
  let menu_icons = nav_icons.map((item, index) => {
    console.log(item.icon);
    return (
      <li>
        <a
          key={`icon-${index}`}
          href={item.url}
          rel='noreferrer'
          target='_blank'
          className={itemClass}
        >
          <i className={item.icon}></i>
        </a>
      </li>
    );
  });
  return <ul className={parentClass}>{menu_icons}</ul>;
}

export default NavIcons;
