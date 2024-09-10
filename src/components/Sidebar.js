import React from 'react';
import './Sidebar.css';
import logo from './logo.png'; // Adjust the path to your logo image

const Sidebar = () => {
  return (
    <div className="sidebar">
    
      <ul>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#devices">Trackers</a>
        </li>
        <li>
          <a href="#stores">Stores</a>
        </li>
        <li>
          <a href="#transfers">Transfers</a>
        </li>
        <li>
          <a href="#other-items">Other Items</a>
        </li>
        <li>
          <a href="#reports">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
