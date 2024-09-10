import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard container">
      <h2 className="mt-4 mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3 shadow-sm">
            <div className="card-header">Total Devices</div>
            <div className="card-body">
              <h5 className="card-title">100</h5>
              <p className="card-text">Total active devices in the system.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3 shadow-sm">
            <div className="card-header">Pending Transfers</div>
            <div className="card-body">
              <h5 className="card-title">5</h5>
              <p className="card-text">Devices waiting to be transferred.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow-sm">
            <div className="card-header">Available Stores</div>
            <div className="card-body">
              <h5 className="card-title">12</h5>
              <p className="card-text">Number of stores available for inventory.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
