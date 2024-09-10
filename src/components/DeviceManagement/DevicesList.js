import React from 'react';

function DevicesList() {
  return (
    <div className="devices-list container-fluid">
      <h2 className="my-4">Devices/Trackers</h2>
      <table className="table table-striped table-responsive">
        <thead className="thead-dark">
          <tr>
            <th>Select</th>
            <th>Device Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through your devices */}
          <tr>
            <td><input type="checkbox" /></td>
            <td>Device A</td>
            <td>Online</td>
            <td>
              <button className="btn btn-primary btn-sm mr-2">Change Status</button>
              <button className="btn btn-success btn-sm">Assign</button>
            </td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
}

export default DevicesList;
