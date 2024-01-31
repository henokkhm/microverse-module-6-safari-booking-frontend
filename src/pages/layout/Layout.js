import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import useWindowSize from '../../hooks/useWindowSize';

const MOBILE_BREAKPOINT = 720;

const Layout = () => {
  const [sidebarMenuIsOpen, setSidebarMenuIsOpen] = useState(false);
  const toggleSidebarMenu = () => setSidebarMenuIsOpen((prev) => !prev);

  const { windowWidth } = useWindowSize();

  // if (windowWidth > MOBILE_BREAKPOINT) {
  //   /**
  //    * Sidebar: shown (without regard to sidebarMenuIsOpen)
  //    * Hamburger Menu Icon: hidden
  //    * Overlay: hidden
  //    * Main div: pushed to the right by 14rem
  //    */
  // } else {
  //   if (sidebarMenuIsOpen) {
  //     /**
  //      * Sidebar: shown
  //      * Hamburger Menu Icon: shown as close button
  //      * Overlay: shown
  //      * Main div: pushed to the right by 14rem
  //      */
  //   } else {
  //     /**
  //      * Sidebar: pushed to the left by 14rem,
  //      * Hamburger Menu Icon: shown as open button
  //      * Overlay: hidden
  //      * Main div: original position
  //      */
  //   }
  // }

  return (
    <div className="min-w-[380px] max-w-[1000px] mx-auto min-h-screen bg-white">
      <Sidebar
        sidebarMenuIsOpen={sidebarMenuIsOpen}
        toggleSidebarMenu={toggleSidebarMenu}
        breakpoint={MOBILE_BREAKPOINT}
      />

      <main className={`ml-10 duration-300 ${((windowWidth > MOBILE_BREAKPOINT) || sidebarMenuIsOpen) && 'translate-x-64'} `}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
