import React from 'react';
import EnvironmentalTrends from './EnvironmentalTrends';
import RiskSummary from './RiskSummary';
import HabitatChart from './HabitatChart';
import { Button } from '@/components/ui/button';
import { useMapData } from '../../hooks/useMapData';

const PredictionPanel: React.FC = () => {
  const { data, isLoading, isError } = useMapData();

  if (isLoading) return <div className="p-4">Loading Prediction Data...</div>;
  if (isError) return <div className="p-4 text-red-500">Error Loading Data</div>;

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Data Summary:</h3>
        <p>Weather Data Points: {data?.weatherData?.features?.length || 0}</p>
        <p>MN Data Points: {data?.mnData?.features?.length || 0}</p>
        <p>Point Data: {data?.points?.features?.length || 0}</p>
        <p>Redlist Data: {data?.redlist?.features?.length || 0}</p>
      </div>
      <HabitatChart />
      <EnvironmentalTrends />
      <RiskSummary />
      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
        View Details on Main Map
      </Button>
    </div>
  );
};

export default PredictionPanel;