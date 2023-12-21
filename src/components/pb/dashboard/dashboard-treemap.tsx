import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";
import { TreeMapCompanyData, PositionData } from "~/types/types";

const data = [
    {
      name: 'Nvidia',
      children: [
        { name: 'Intern', size: 1302 },
        { name: 'Mid', size: 24593 },
        { name: 'Senior', size: 652 },
      ],
    },
    {
      name: 'Apple',
      children: [
        { name: 'Intern', size: 2138 },
        { name: 'Mid', size: 3824 },
        { name: 'Senior', size: 1353 },
      ],
    },
    {
      name: 'Amazon',
      children: [
        { name: 'Intern', size: 20544 },
        { name: 'Mid', size: 19788 },
        { name: 'Senior', size: 19788 },
      ],
    },
    {
      name: 'Google',
      children: [
        { name: 'Inter', size: 7313 },
        { name: 'Senior', size: 6880 },
        { name: 'Mid', size: 3701 },      
      ],
    },
  ];
  

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, colors, name, value } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? colors[Math.floor((index / root.children.length) * 6)]
              : "none",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10)
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
};

const COLORS = ['#fb923c',  '#68b2c9', '#38bdf8', '#34abf5', '#3099f2', '#2c87f0', '#2875ed', '#2563eb'];



export default function TreeMapDashboard({ TreeMapDashboardData }: { TreeMapDashboardData?: TreeMapCompanyData[] } ) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
        <ResponsiveContainer width="100%" height={350}>
            <Treemap
                //   width={400}
                //   height={400}
                data={TreeMapDashboardData || data}
                dataKey="size"
                stroke="#fff"
                fill="#8884d8"
                content={<CustomizedContent colors={COLORS} />}
                >
                <Tooltip />
            </Treemap>
        </ResponsiveContainer>
    </div>
  );
}
