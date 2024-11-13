import React from 'react';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'upload':
      return (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Data Upload</h2>
          <input type="text" placeholder="Enter data source URL" className="w-full p-2 mb-2 border rounded" />
          <button className="w-full p-2 bg-blue-500 text-white rounded mb-2">Upload from URL</button>
          <input type="file" className="w-full p-2 mb-2 border rounded" />
          <button className="w-full p-2 bg-blue-500 text-white rounded mb-2">Upload Local Files</button>
          <button className="w-full p-2 bg-green-500 text-white rounded">Connect to API</button>
        </div>
      );
    case 'performance':
      return (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Model Performance</h2>
          {/* Add performance metrics and charts here */}
        </div>
      );
    case 'visualization':
      return (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Data Visualization</h2>
          {/* Add visualization options here */}
        </div>
      );
    case 'settings':
      return (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          {/* Add settings options here */}
        </div>
      );
    default:
      return null;
  }
};

export default TabContent;