import React from 'react';

interface DataLayersProps {
  toggleLayer: (layerName: string) => void;
}

const DataLayers: React.FC<DataLayersProps> = ({ toggleLayer }) => {
  const layers = ['Vegetation', 'Soil Moisture', 'Water Sources', 'Detection Data'];

  return (
    <div className="p-4 border-t border-gray-700">
      <h3 className="font-semibold mb-2">Data Layers</h3>
      <div className="space-y-2">
        {layers.map((layer) => (
          <div key={layer} className="flex items-center justify-between">
            <span>{layer}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => toggleLayer(layer)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataLayers;