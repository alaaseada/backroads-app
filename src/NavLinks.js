import React from 'react';
import { nav_links } from './data';

function NavLinks({ parentClass, itemClass }) {
  let menu_items = nav_links.map((item, index) => {
    return (
      <li>
        <a key={`link-${index}`} href={item.url} className={itemClass}>
          {item.text}
        </a>
      </li>
    );
  });
  return (
    <ul className={parentClass} id={parentClass}>
      {menu_items}
    </ul>
  );
}

export default NavLinks;
