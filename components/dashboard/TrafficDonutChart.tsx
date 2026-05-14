"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { trafficSources } from "@/lib/mock-data";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { color: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-xl">
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.payload.color }} />
        <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
        <span className="font-bold text-slate-800 dark:text-white">{item.value}%</span>
      </div>
    </div>
  );
}

export default function TrafficDonutChart() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Traffic Sources</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Breakdown by acquisition channel</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-full sm:w-48 h-48 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficSources}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {trafficSources.map((entry, index) => (
                  <Cell key={index} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-3 w-full">
          {trafficSources.map((source) => (
            <div key={source.name} className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: source.color }} />
              <span className="text-sm text-slate-600 dark:text-slate-300 flex-1 truncate">{source.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: source.value + "%", backgroundColor: source.color }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 w-8 text-right">{source.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
