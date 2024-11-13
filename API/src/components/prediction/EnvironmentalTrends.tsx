import React from 'react';
import { Thermometer, Droplets, Leaf } from 'lucide-react';

const EnvironmentalTrends: React.FC = () => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-2">Environmental Trends</h3>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Thermometer className="text-red-500 mr-2" />
          <span>+2.5°C</span>
        </div>
        <div className="flex items-center">
          <Droplets className="text-blue-500 mr-2" />
          <span>-5% Humidity</span>
        </div>
        <div className="flex items-center">
          <Leaf className="text-green-500 mr-2" />
          <span>+10% Vegetation</span>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalTrends;