import mapboxgl from 'mapbox-gl';

export const addWeatherLayers = (map: mapboxgl.Map, weatherData: any) => {
  const layers = [
    { 
      id: 'temperature', 
      color: ['interpolate', ['linear'], ['get', 'temperature'], 0, '#00ffff', 25, '#ffff00', 50, '#ff0000'] 
    },
    { 
      id: 'precipitation', 
      color: ['interpolate', ['linear'], ['get', 'precipitation'], 0, '#ffffff', 10, '#0000ff', 50, '#000080'] 
    }
  ];

  if (!map.getSource('weather-data')) {
    map.addSource('weather-data', {
      type: 'geojson',
      data: weatherData
    });
  }

  layers.forEach(layer => {
    if (!map.getLayer(`weather-${layer.id}`)) {
      map.addLayer({
        id: `weather-${layer.id}`,
        type: 'circle',
        source: 'weather-data',
        paint: {
          'circle-radius': 6,
          'circle-color': layer.color as mapboxgl.Expression,
          'circle-opacity': 0.7
        },
        layout: {
          visibility: 'none'
        }
      });
    }
  });
};

export const addAdminBoundariesLayer = (map: mapboxgl.Map) => {
  if (!map.getSource('admin-boundaries')) {
    map.addSource('admin-boundaries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1'
    });
  }

  if (!map.getLayer('admin-boundaries-layer')) {
    map.addLayer({
      id: 'admin-boundaries-layer',
      type: 'line',
      source: 'admin-boundaries',
      'source-layer': 'country_boundaries',
      paint: {
        'line-color': '#000000',
        'line-width': 1
      }
    });
  }
};