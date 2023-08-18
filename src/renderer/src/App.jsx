import React from 'react';
import WelcomePage from './components/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NhostClient, NhostProvider } from '@nhost/react';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
})

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route index element={<WelcomePage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  )
}

export default App
