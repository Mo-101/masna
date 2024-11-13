import { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeWebSocket, closeWebSocket } from '../utils/websocket';

interface MapData {
  weatherData?: {
    features: any[];
  };
  mnData?: {
    features: any[];
  };
  points?: {
    features: any[];
  };
  redlist?: {
    features: any[];
  };
}

export const useMapData = () => {
  const [data, setData] = useState<MapData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Mock data for demonstration - replace with actual API endpoints
        const mockData = {
          weatherData: {
            features: []
          },
          mnData: {
            features: []
          },
          points: {
            features: []
          },
          redlist: {
            features: []
          }
        };

        setData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();

    // Initialize WebSocket for real-time updates
    initializeWebSocket((newData) => {
      setData(prevData => ({...prevData, ...newData}));
    });

    return () => {
      closeWebSocket();
    };
  }, []);

  return { data, isLoading, isError };
};