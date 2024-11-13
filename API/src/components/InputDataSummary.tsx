import React from 'react';

const InputDataSummary: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Input Data Summary</h2>
      <div className="mb-4">
        <h3 className="font-medium">Data Specifications</h3>
        <p>Type: Satellite Imagery</p>
        <p>Dataset Size: 1000 images</p>
        <p>Description: High-resolution satellite images of potential Mastomys habitats</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Data Sample Preview</h3>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[1, 2, 3].map((i) => (
            <img key={i} src={`/sample-image-${i}.jpg`} alt={`Sample ${i}`} className="w-full h-24 object-cover rounded" />
          ))}
        </div>
      </div>
      <button className="w-full p-2 bg-gray-700 text-white rounded">View Full Data</button>
    </div>
  );
};

export default InputDataSummary;