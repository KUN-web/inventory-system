import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DevicesList from './components/DeviceManagement/DevicesList';
import StoresList from './components/Stores/StoresList';
import TransfersList from './components/Transfers/TransfersList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="content p-4">
            <Routes>
              <Route path="/" exact component={Dashboard} />
              <Route path="/devices" component={DevicesList} />
              <Route path="/stores" component={StoresList} />
              <Route path="/transfers" component={TransfersList} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
