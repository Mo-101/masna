import React from 'react';

const PredictionResults: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Prediction Results</h2>
      <div className="mb-4">
        <h3 className="font-medium">Summary</h3>
        <p>Average Confidence: 85%</p>
        <p>Prediction Accuracy: 92%</p>
        <p>Data Points Processed: 1000</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Output Format</h3>
        <p>Classification: Habitat Suitability (Low, Medium, High)</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Results Table</h3>
        <table className="w-full mt-2">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Prediction</th>
              <th className="p-2 text-left">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, prediction: 'High', confidence: '95%' },
              { id: 2, prediction: 'Medium', confidence: '78%' },
              { id: 3, prediction: 'Low', confidence: '62%' },
            ].map((row) => (
              <tr key={row.id} className="border-b border-gray-700">
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.prediction}</td>
                <td className="p-2">{row.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictionResults;