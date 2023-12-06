"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export interface DashboardGraphProps {
    name: string,
    total: number
}

export function DashboardGraph({ DashboardGraphData }: { DashboardGraphData?: DashboardGraphProps[] } ) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={DashboardGraphData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={8}
          tickLine={true}
          axisLine={false}
          angle={-30} // Rotate the labels by -45 degrees
          textAnchor="end" // Align the labels to the end of the tick
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#E17439" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50) + 5,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50) + 5,
  },
]