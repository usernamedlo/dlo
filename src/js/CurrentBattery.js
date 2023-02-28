import React, { useState, useEffect } from 'react';

export default function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [batteryCharging] = useState(false);

  useEffect(() => {
    function handleBatteryChange(event) {
      const { level } = event.target;
      setBatteryLevel(level * 100);
    }

    navigator.getBattery().then(battery => {
      handleBatteryChange({ target: battery });
      battery.addEventListener('levelchange', handleBatteryChange);
    });

    return () => {
      navigator.getBattery().then(battery => {
        battery.removeEventListener('levelchange', handleBatteryChange);
      });
    };
  }, []);

  let batteryIcon;
  if (batteryCharging) {
    batteryIcon = <i className="fas fa-battery-bolt"></i>;
  } else if (batteryLevel < 25) {
    batteryIcon = <i className="fas fa-battery-empty"></i>;
  } else if (batteryLevel < 50) {
    batteryIcon = <i className="fas fa-battery-quarter"></i>;
  } else if (batteryLevel < 75) {
    batteryIcon = <i className="fas fa-battery-half"></i>;
  } else if (batteryLevel < 100) {
    batteryIcon = <i className="fas fa-battery-three-quarters"></i>;
  } else {
    batteryIcon = <i className="fas fa-battery-full"></i>;
  }

  return (
    <span>{batteryIcon}</span>
  );
}
