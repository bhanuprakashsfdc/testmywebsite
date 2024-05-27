import React from 'react';
import useStore from '../store/store'; // Assuming you're using Zustand for state management
import './components.css';

function DeviceSelector() {
    const { devices, setDevice } = useStore(); // Access devices and setDevice action from the global state

    if (!devices || devices.length === 0) {
      return <div>Loading devices...</div>; // Display loading or placeholder text if devices are not yet loaded
  }

  const handleDeviceChange = (event) => {
      // Find the selected device based on the dropdown selection
      const selectedDevice = devices.find(device => device.id === event.target.value);
      setDevice(selectedDevice); // Update the global state with the selected device
  };

  return (
      <select onChange={handleDeviceChange} className="device-selector">
          {devices.map(device => (
              <option key={device.id} value={device.id}>
                  {device.name} ({device.width}x{device.height}) // Display device name and resolution
              </option>
          ))}
      </select>
  );
}

export default DeviceSelector;
