import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Space from './Space'
import ToDoList from './ToDoList'
import Contacts from './Contacts'
import Meetings from './Meetings'
import City from './City'
import Weather from './Weather'
import Date from './Date-Time'

export default function WelcomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Space />
            <div className="ml-40 mr-4 max-w-screen-xxl mx-auto max-h-screen relative">
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
    )
}
