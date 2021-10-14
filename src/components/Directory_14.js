import React, {useState} from 'react';
import './Directory_14.scss';
import MenuItem_14 from './MenuItem_14';
import items from './menu-items-data';

const Directory_14 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div className="directory-menu">
      {menuItems.map(item => {
        const {id, name, remoteUrl, size} =item;
        return (
            <MenuItem_14 id={id} name={name} remoteUrl={remoteUrl} size={size}/>
        )
      })

      }
    </div>
  );
};

export default Directory_14;

 