import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Forest', value: 40 },
  { name: 'Grassland', value: 40 },
  { name: 'Urban', value: 30 },
  { name: 'Wetland', value: 40 },
];

const HabitatChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
        <YAxis tick={{ fill: '#9CA3AF' }} />
        <Tooltip />
        <Bar dataKey="value" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HabitatChart;