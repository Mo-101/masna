import React from 'react';
import { Play } from 'lucide-react';

const PredictionStatus: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Prediction Status</h2>
        <p className="text-green-500">Completed</p>
        <p className="text-sm text-gray-400">Last updated: 2023-04-15 14:30 UTC</p>
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded flex items-center justify-center">
        <Play size={20} className="mr-2" />
        Run Prediction
      </button>
      <div className="mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <p className="text-right text-sm mt-1">100% Complete</p>
      </div>
    </div>
  );
};

export default PredictionStatus;