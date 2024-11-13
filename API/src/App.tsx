import React, { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';

const queryClient = new QueryClient();

const App = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelType, setPanelType] = useState<'training' | 'prediction'>('training');

  const togglePredictionPanel = () => {
    setIsPanelOpen(!isPanelOpen);
    setPanelType('prediction');
  };

  const toggleTrainingPanel = () => {
    setIsPanelOpen(!isPanelOpen);
    setPanelType('training');
  };

  const toggleNotifications = () => {
    // Implement notification logic here
    console.log("Toggle notifications");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col h-screen">
            <Header 
              togglePredictionPanel={togglePredictionPanel} 
              toggleTrainingPanel={toggleTrainingPanel} 
              toggleNotifications={toggleNotifications}
            />
            <main className="flex-grow bg-gray-200 relative">
              <MapComponent isPanelOpen={isPanelOpen} panelType={panelType} />
            </main>
            <Footer />
          </div>
          <Routes>
            {/* Add routes here if needed */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;