"use client"

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const data = [
  { name: "Amazon", total: 40 },
  { name: "Microsoft", total: 30 },
  { name: "Nvidia", total: 20 },
  { name: "Google", total: 10 },
];

const COLORS = ['#fb923c',  '#68b2c9', '#38bdf8', '#34abf5', '#3099f2', '#2c87f0', '#2875ed', '#2563eb'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent, index }: { 
  cx: number, 
  cy: number, 
  midAngle: number, 
  innerRadius: number, 
  outerRadius: number, 
  percent: number, 
  index: number 
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function DashboardPieChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100} 
          labelLine={false}
          label={renderCustomizedLabel}         
          fill="#8884d8"
          dataKey="total"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
