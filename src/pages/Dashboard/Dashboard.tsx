import React, { useState } from 'react';
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import Modal from './Modal/Modal';
import MediaQuery from 'react-responsive';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import TabNavbar from './TabNavbar/TabNavbar';

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <div className="navbar-root">
        <MediaQuery minWidth={992}>
          <DesktopNavbar setModalOpen={setModalOpen} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <TabNavbar setModalOpen={setModalOpen} />
        </MediaQuery>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className="outlet-div">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
