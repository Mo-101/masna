import React, { useState } from 'react';
import Map from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { addWeatherLayers, addAdminBoundariesLayer } from '../utils/mapLayers';
import { useMapData } from '../hooks/useMapData';
import { useToast } from "@/hooks/use-toast";
import SidePanel from './SidePanel';
import WindLayer from './WindLayer';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWthbmltbzEiLCJhIjoiY2x4czNxbjU2MWM2eTJqc2gwNGIwaWhkMSJ9.jSwZdyaPa1dOHepNU5P71g';

const MapComponent: React.FC<{ isPanelOpen: boolean; panelType: 'training' | 'prediction' }> = ({ isPanelOpen, panelType }) => {
  const [viewState, setViewState] = useState({
    longitude: 8.6753,
    latitude: 9.0820,
    zoom: 5
  });
  const { data, isLoading, isError } = useMapData();
  const { toast } = useToast();
  const [showWindLayer, setShowWindLayer] = useState(false);

  const onMapLoad = (event: mapboxgl.MapboxEvent) => {
    const map = event.target;
    addAdminBoundariesLayer(map);

    if (data && !isLoading && !isError) {
      if (data.weatherData) {
        addWeatherLayers(map, data.weatherData);
        toast({
          title: "Weather Data Loaded",
          description: "Weather layers have been successfully added to the map.",
        });
      }
    }
  };

  const toggleLayer = (layerName: string) => {
    const map = (mapboxgl as any).Map.instance;
    if (map) {
      const visibility = map.getLayoutProperty(layerName, 'visibility');
      map.setLayoutProperty(
        layerName,
        'visibility',
        visibility === 'visible' ? 'none' : 'visible'
      );
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          style={{position: 'absolute', width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/akanimo1/cm10t9lw001cs01pbc93la79m"
          onLoad={onMapLoad}
          mapboxAccessToken={mapboxgl.accessToken}
          reuseMaps
          attributionControl={true}
          cursor="default"
        />
        <WindLayer visible={showWindLayer} />
      </div>
      {isPanelOpen && (
        <SidePanel
          toggleLayer={toggleLayer}
          position="right"
          panelType={panelType}
        />
      )}
    </div>
  );
};

export default MapComponent;
