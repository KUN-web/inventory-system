import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function AddDeviceModal() {
  const [show, setShow] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  const [status, setStatus] = useState('Online');

  const handleAddDevice = () => {
    // Make POST request to add device
    axios.post('/api/devices', { name: deviceName, status }).then((response) => {
      console.log('Device added successfully', response.data);
      setShow(false);
    });
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Device
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Device Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter device name"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Damaged">Damaged</option>
                <option value="Repaired">Repaired</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddDevice}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDeviceModal;
