import React, { useState, useEffect } from 'react';
import { User, Settings, LogOut, Play, Pause, Square, Eye, BarChart2, Download, Share2, HelpCircle, MessageSquare, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataLayers from './DataLayers';
import TrainingPanel from './TrainingPanel';
import PredictionPanel from './PredictionPanel';

interface SidePanelProps {
  toggleLayer: (layerName: string) => void;
  position: 'left' | 'right';
  panelType: 'training' | 'prediction';
}

const SidePanel: React.FC<SidePanelProps> = ({ toggleLayer, position, panelType }) => {
  const [trainingStatus, setTrainingStatus] = useState('Not Started');
  const [progress, setProgress] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [filesAccessed, setFilesAccessed] = useState(0);
  const [dataProcessed, setDataProcessed] = useState(0);

  const startTraining = () => {
    setTrainingStatus('Training');
    setProgress(0);
    setFilesAccessed(0);
    setDataProcessed(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTrainingStatus('Completed');
          return 100;
        }
        setFilesAccessed(Math.floor(prevProgress / 2));
        setDataProcessed(Math.floor(prevProgress * 1000));
        return prevProgress + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (trainingStatus === 'Training') {
      const remainingTime = Math.floor((100 - progress) * 0.6);
      setEstimatedTime(`${Math.floor(remainingTime / 60)}h ${remainingTime % 60}m`);
    }
  }, [progress, trainingStatus]);

  const getStatusColor = () => {
    if (trainingStatus === 'Not Started') return 'bg-gray-500';
    if (trainingStatus === 'Training') return 'bg-gradient-to-r from-yellow-500 via-blue-500 to-green-500';
    return 'bg-green-500';
  };

  if (panelType === 'prediction') {
    return (
      <div className={`absolute top-0 ${position}-0 h-full w-96 bg-gray-800 text-white overflow-y-auto`}>
        <PredictionPanel />
        <DataLayers toggleLayer={toggleLayer} />
      </div>
    );
  }

  return (
    <div className={`absolute top-0 ${position}-0 h-full w-96 bg-gray-800 text-white overflow-y-auto`}>
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Mastomys Trainer</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon"><User className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><LogOut className="h-5 w-5" /></Button>
        </div>
      </header>

      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="status"><Activity className="mr-2 h-4 w-4" /> Status</TabsTrigger>
          <TabsTrigger value="details"><Eye className="mr-2 h-4 w-4" /> Details</TabsTrigger>
          <TabsTrigger value="metrics"><BarChart2 className="mr-2 h-4 w-4" /> Metrics</TabsTrigger>
          <TabsTrigger value="logs"><MessageSquare className="mr-2 h-4 w-4" /> Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="status" className="p-4">
          <TrainingPanel />
        </TabsContent>
        <TabsContent value="details" className="p-4">
          <h2 className="text-lg font-semibold mb-2">Training Details</h2>
          <div className="mb-4">
            <h3 className="font-medium">Model Information</h3>
            <p>Type: Convolutional Neural Network (CNN)</p>
            <p>Version: 1.0.0</p>
            <Button variant="link" className="p-0">View Model Architecture</Button>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Data Source</h3>
            <p>Type: Satellite Imagery</p>
            <p>Size: 10,000 images</p>
            <Button className="mt-2">
              <Eye className="mr-2 h-4 w-4" /> View Data
            </Button>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Training Configuration</h3>
            <p>Batch Size: 32</p>
            <p>Learning Rate: 0.001</p>
            <p>Epochs: 100</p>
            <p>Optimizer: Adam</p>
            <Button className="mt-2">Edit Config</Button>
          </div>
        </TabsContent>
        <TabsContent value="metrics" className="p-4">
          <h2 className="text-lg font-semibold mb-2">Live Metrics</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Performance Metrics</h3>
            {/* Add performance metrics visualization here */}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Resource Utilization</h3>
            {/* Add resource utilization visualization here */}
          </div>
          <Button className="w-full mt-2">
            <Eye className="mr-2 h-4 w-4" /> View Detailed Performance
          </Button>
        </TabsContent>
        <TabsContent value="logs" className="p-4">
          <h2 className="text-lg font-semibold mb-2">Training Logs</h2>
          <div className="bg-gray-900 p-2 rounded mb-4 h-48 overflow-y-auto">
            <p>[2023-04-15 14:30:00] Training started</p>
            <p>[2023-04-15 14:30:05] Epoch 1/100: loss: 0.6543, accuracy: 0.7234</p>
            <p>[2023-04-15 14:30:10] Epoch 2/100: loss: 0.5432, accuracy: 0.7890</p>
            {/* Add more log entries as needed */}
          </div>
          <Button className="w-full mb-4">
            <Download className="mr-2 h-4 w-4" /> Download Logs
          </Button>
          <h3 className="font-medium mb-2">Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center text-yellow-500">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Warning: High GPU temperature detected</span>
            </div>
            <div className="flex items-center text-green-500">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Info: Checkpoint saved successfully</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <DataLayers toggleLayer={toggleLayer} />

      <footer className="p-4 border-t border-gray-700 text-sm">
        <div className="flex justify-between items-center mb-2">
          <Button variant="link" className="p-0">
            <HelpCircle className="mr-2 h-4 w-4" /> Help & Resources
          </Button>
          <Button variant="link" className="p-0">
            <MessageSquare className="mr-2 h-4 w-4" /> Feedback
          </Button>
        </div>
        <p className="text-center text-gray-400">Version 1.0.0 | © 2024 Mastomys Trainer</p>
      </footer>
    </div>
  );
};

export default SidePanel;
