import React from 'react';

const RiskSummary: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Risk Summary</h3>
      <div className="space-y-2">
        <p><strong>Highest Predicted Risk:</strong> Urban areas near water sources</p>
        <p><strong>Newly Identified Hotspots:</strong> 3 locations in grasslands</p>
        <p><strong>Habitat Suitability Change:</strong> +15% in forest regions</p>
      </div>
    </div>
  );
};

export default RiskSummary;