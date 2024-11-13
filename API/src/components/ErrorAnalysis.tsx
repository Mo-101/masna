import React from 'react';

const ErrorAnalysis: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Error Analysis & Metrics</h2>
      <div className="mb-4">
        <h3 className="font-medium">Confusion Matrix</h3>
        <div className="grid grid-cols-3 gap-1 mt-2 text-center">
          <div className="bg-gray-700 p-2">TN: 300</div>
          <div className="bg-gray-700 p-2">FP: 40</div>
          <div className="bg-gray-700 p-2">FN: 20</div>
          <div className="bg-gray-700 p-2">TP: 640</div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Performance Metrics</h3>
        <p>Precision: 94.1%</p>
        <p>Recall: 97.0%</p>
        <p>F1 Score: 95.5%</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Anomalies</h3>
        <p>5 data points with confidence &lt; 50%</p>
      </div>
      <button className="w-full p-2 bg-green-600 text-white rounded">Export Analysis Report</button>
    </div>
  );
};

export default ErrorAnalysis;