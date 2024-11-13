import React from 'react';
import { Layers, Brain, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  togglePredictionPanel: () => void;
  toggleTrainingPanel: () => void;
  toggleNotifications: () => void;
}

const Header: React.FC<HeaderProps> = ({ togglePredictionPanel, toggleTrainingPanel, toggleNotifications }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-xl font-bold text-yellow-400">Mastomys Habitat & Risk Assessment</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={toggleNotifications}
          variant="ghost"
          size="icon"
          className="text-white hover:text-yellow-400"
          title="Notifications"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          onClick={toggleTrainingPanel}
          variant="ghost"
          size="icon"
          className="text-white hover:text-yellow-400"
          title="Toggle Training Panel"
        >
          <Brain className="h-5 w-5" />
        </Button>
        <Button
          onClick={togglePredictionPanel}
          variant="ghost"
          size="icon"
          className="text-white hover:text-yellow-400"
          title="Toggle Prediction Panel"
        >
          <Layers className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;