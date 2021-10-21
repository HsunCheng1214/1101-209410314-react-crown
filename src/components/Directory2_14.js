import React, { useState, useEffect } from 'react';
import MenuItem_14 from './MenuItem_14';
import axios from 'axios';
import './Directory_14.scss';
// import items from './menu-items-data';

const Directory2_14 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown-14.herokuapp.com/api_14/category_14';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_14', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div className="directory-menu">
      {menuItems.map((item) => {
        const { id, name, remote_url, size } = item;
        return (
          <MenuItem_14 id={id} name={name} remoteUrl={remote_url} size={size} />
        );
      })}
    </div>
  );
};

export default Directory2_14;
