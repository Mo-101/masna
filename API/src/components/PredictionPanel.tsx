import React, { useEffect } from 'react';
import { useMapData } from '../hooks/useMapData';
import { useToast } from "@/hooks/use-toast";
import EnvironmentalTrends from './prediction/EnvironmentalTrends';
import RiskSummary from './prediction/RiskSummary';
import HabitatChart from './prediction/HabitatChart';
import { Button } from '@/components/ui/button';

const PredictionPanel: React.FC = () => {
  const { data, isLoading, isError } = useMapData();
  const { toast } = useToast();

  useEffect(() => {
    if (data && !isLoading && !isError) {
      // Process data for AI model predictions
      // This is a placeholder for the actual data processing and prediction
      console.log('Data ready for predictions:', data);
      toast({
        title: "Data Loaded",
        description: "Prediction data has been successfully loaded.",
      });
    }
  }, [data, isLoading, isError, toast]);

  if (isLoading) return <div className="p-4">Loading Prediction Data...</div>;
  if (isError) return <div className="p-4 text-red-500">Error Loading Data</div>;

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
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