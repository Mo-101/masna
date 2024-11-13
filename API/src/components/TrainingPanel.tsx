import React, { useEffect, useState } from 'react';
import { useMapData } from '../hooks/useMapData';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const TrainingPanel: React.FC = () => {
  const { data, isLoading, isError } = useMapData();
  const { toast } = useToast();
  const [trainingProgress, setTrainingProgress] = useState(0);

  useEffect(() => {
    if (data && !isLoading && !isError) {
      console.log('Data ready for training:', data);
      toast({
        title: "Data Loaded",
        description: "Training data has been successfully loaded.",
      });
    }
  }, [data, isLoading, isError, toast]);

  const handleStartTraining = () => {
    // Simulating training progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setTrainingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        toast({
          title: "Training Complete",
          description: "Model training has finished successfully.",
        });
      }
    }, 1000);
  };

  if (isLoading) return <div className="p-4">Loading Training Data...</div>;
  if (isError) return <div className="p-4 text-red-500">Error Loading Data</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Training Panel</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Data Summary:</h3>
        <p>Weather Data Points: {data?.weatherData?.features?.length || 0}</p>
        <p>MN Data Points: {data?.mnData?.features?.length || 0}</p>
        <p>Point Data: {data?.points?.features?.length || 0}</p>
        <p>Redlist Data: {data?.redlist?.features?.length || 0}</p>
      </div>
      <Button onClick={handleStartTraining} className="mb-4">Start Training</Button>
      <Progress value={trainingProgress} className="w-full" />
      <p className="mt-2">Training Progress: {trainingProgress}%</p>
    </div>
  );
};

export default TrainingPanel;