import React, { useEffect, useState } from 'react';
import { initializeWebSocket, closeWebSocket } from '../services/api';
import { AlertCircle } from 'lucide-react';

interface Alert {
  id: string;
  type: string;
  message: string;
  timestamp: string;
}

const AlertsPanel: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const handleNewAlert = (data: Alert) => {
      setAlerts(prevAlerts => [...prevAlerts, data].slice(-5)); // Keep only the last 5 alerts
    };

    initializeWebSocket(handleNewAlert);

    return () => {
      closeWebSocket();
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg max-w-md">
      <h2 className="text-lg font-semibold mb-4">Real-time Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts at the moment.</p>
      ) : (
        <ul className="space-y-2">
          {alerts.map(alert => (
            <li key={alert.id} className="flex items-start space-x-2 p-2 bg-gray-100 rounded">
              <AlertCircle className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">{alert.type}</p>
                <p className="text-sm text-gray-600">{alert.message}</p>
                <p className="text-xs text-gray-400">{new Date(alert.timestamp).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsPanel;