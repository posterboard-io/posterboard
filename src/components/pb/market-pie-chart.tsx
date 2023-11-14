"use client"

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TechCount } from "~/app/dashboard/(page)/stats/page";

const COLORS = ['#fb923c',  '#68b2c9', '#38bdf8', '#34abf5', '#3099f2', '#2c87f0', '#2875ed', '#2563eb', '#2251e8', '#1f3fe6', '#1b2de3', '#172bd1', '#1329be', '#0f17ac', '#0a15a0', '#060d8e', '#020b7c'];

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

export function StatsPieChart({ data }: { data: TechCount[] } ) {

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
          dataKey="value"
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
