import React, { useState, useEffect } from 'react'
import styles from '../styles/components/Layout.module.css';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  HomeIcon,
  LogoutIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Avatar from './Avatar';
import DarkModeButton from './DarkMode';
import { useSignOut } from '@nhost/react'
import { useUserId } from '@nhost/react'
import { GET_USER_QUERY } from './GraphQL/Queries';
import Logo from "../assets/logo.png"


const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { signOut } = useSignOut()
  const id = useUserId()

  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { id },
    skip: !id
  })
  
  const user = data?.user

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: UserIcon,
    },
    {
      label: 'Logout',
      onClick: signOut,
      icon: LogoutIcon
    }
  ];

  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <DarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
          <Menu as="div" className={styles.menu}>
            <Menu.Button className={styles['menu-button']}>
              <Avatar src={user?.avatarUrl} alt={user?.displayName} />
              <ChevronDownIcon />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter={styles['menu-transition-enter']}
              enterFrom={styles['menu-transition-enter-from']}
              enterTo={styles['menu-transition-enter-to']}
              leave={styles['menu-transition-leave']}
              leaveFrom={styles['menu-transition-leave-from']}
              leaveTo={styles['menu-transition-leave-to']}
            >
              <Menu.Items className={styles['menu-items-container']}>
                <div className={styles['menu-header']}>
                  <Avatar src={user?.avatarUrl} alt={user?.displayName} />
                  <div className={styles['user-details']}>
                    <span>{user?.displayName}</span>
                    <span className={styles['user-email']}>{user?.email}</span>
                  </div>
                </div>

                <div className={styles['menu-items']}>
                  {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                    <div key={label} className={styles['menu-item']}>
                      <Menu.Item>
                        {href ? (
                          <Link to={href}>
                            <Icon />
                            <span>{label}</span>
                          </Link>
                        ) : (
                          <button onClick={onClick}>
                            <Icon />
                            <span>{label}</span>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles['main-container']}>
          {error ? (
            <p>Something went wrong. Try to refresh the page.</p>
          ) : !loading ? (
            <Outlet context={{ user }} />
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Layout;
