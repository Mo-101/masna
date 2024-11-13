import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
const OPENWEATHER_API_KEY = '32b25b6e6eb45b6df18d92b934c332a7';

export const fetchOpenWeatherData = async (lat: number, lon: number, layer: string = 'weather') => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/${layer}`, {
      params: {
        lat,
        lon,
        appid: OPENWEATHER_API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching OpenWeather data:', error);
    throw error;
  }
};

export const fetchRatLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/rat-locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rat locations:', error);
    throw error;
  }
};

export const fetchLassaFeverCases = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Lassa Fever cases:', error);
    throw error;
  }
};

export const startTraining = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/start-training`);
    return response.data;
  } catch (error) {
    console.error('Error starting training:', error);
    throw error;
  }
};

export const getTrainingProgress = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/training-progress`);
    return response.data;
  } catch (error) {
    console.error('Error fetching training progress:', error);
    throw error;
  }
};

// WebSocket connection for real-time updates
let socket: WebSocket | null = null;

export const initializeWebSocket = (onMessage: (data: any) => void) => {
  if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket('ws://localhost:5000');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }
};

export const closeWebSocket = () => {
  if (socket) {
    socket.close();
  }
};