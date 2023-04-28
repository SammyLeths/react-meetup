import React from 'react';
import { Link } from 'react-router-dom';

import styles from './main_nav.module.css';

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
