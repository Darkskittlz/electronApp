import styles from '../styles/pages/Dashboard.module.css';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Space from '../components/Space'
import ToDoList from '../components/ToDoList'
import Contacts from '../components/Contacts'
import Meetings from '../components/Meetings'
import City from '../components/City'
import Weather from '../components/Weather'
import Date from '../components/Date-Time'

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useOutletContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Space />
      <div className="max-w-screen-xxl mx-auto max-h-screen relative">
        <div className="z-50 flex justify-between items-center">
          <City />
          <Weather />
          <Date />
        </div>
        <div className="flex mt-5 justify-center">
          <div className="z-50 mr-8 h-20 w-60 rounded-lg bg-white flex items-center justify-center dark:bg-blur dark:border">
            <h1 className="text-black dark:text-white text-center">Welcome <br />Tristan Summers</h1>
          </div>
        </div>
        <div className="h-36 max-h-screen">
          <div className="z-50 max-w-screen-xxl justify-between flex">
            <ToDoList />
            <Contacts />
            <Meetings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
