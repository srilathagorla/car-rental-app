import React, { useState } from 'react';
import './App.css';

const VendorDashboard = () => {
  const [vendorData, setVendorData] = useState({
    username: '',
    password: '',
    carName: '',
    areaOfService: '',
  });

  const handleVendorSignUp = () => {
    fetch('http://localhost:3001/vendor/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleAddCar = () => {
    fetch('http://localhost:3001/vendor/addcar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <div>
        <h3>Vendor Sign Up</h3>
        <label>
          Username:
          <input
            type="text"
            value={vendorData.username}
            onChange={(e) => setVendorData({ ...vendorData, username: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={vendorData.password}
            onChange={(e) => setVendorData({ ...vendorData, password: e.target.value })}
          />
        </label>
        <button onClick={handleVendorSignUp}>Sign Up</button>
      </div>
      <div>
        <h3>Add Car</h3>
        <label>
          Car Name:
          <input
            type="text"
            value={vendorData.carName}
            onChange={(e) => setVendorData({ ...vendorData, carName: e.target.value })}
          />
        </label>
        <label>
          Area of Service:
          <input
            type="text"
            value={vendorData.areaOfService}
            onChange={(e) => setVendorData({ ...vendorData, areaOfService: e.target.value })}
          />
        </label>
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </div>
  );
};

const ClientDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationSelect = () => {
    fetch('http://localhost:3001/client/selectlocation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location: selectedLocation }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Client Dashboard</h2>
      <div>
        <h3>Select Location</h3>
        <label>
          Initial Location:
          <input
            type="text"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
        </label>
        <button onClick={handleLocationSelect}>Select Location</button>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const handleReviewInteractions = () => {
    fetch('http://localhost:3001/admin/review')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleReviewInteractions}>Review Interactions</button>
    </div>
  );
};


const App = () => {
  const [activeDashboard, setActiveDashboard] = useState('client');

  const switchDashboard = (dashboard) => {
    setActiveDashboard(dashboard);
  };

  return (
    <div className="App">
      <div className="dashboard">
        <button onClick={() => switchDashboard('vendor')}>Vendor</button>
        <button onClick={() => switchDashboard('client')}>Client</button>
        <button onClick={() => switchDashboard('admin')}>Admin</button>
      </div>

      {activeDashboard === 'vendor' && <VendorDashboard />}
      {activeDashboard === 'client' && <ClientDashboard />}
      {activeDashboard === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default App;