"use client";

import { TrendingUp, TrendingDown } from 'lucide-react';
import { ReactNode } from "react";

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: ReactNode;
  gradient?: string;
}

export default function KpiCard({ label, value, change, trend, icon, gradient }: KpiCardProps) {
  const isPositive = trend === "up";
  const isGoodTrend = (label === "Churn Rate") ? !isPositive : isPositive;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Background gradient accent */}
      <div className={["absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300", gradient || "bg-gradient-to-br from-indigo-500 to-violet-600"].join(" ")} />

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</p>
          <div className="mt-2 flex items-center gap-1.5">
            {isGoodTrend ? (
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={["text-sm font-medium", isGoodTrend ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"].join(" ")}>
              {change}
            </span>
            <span className="text-xs text-slate-400">vs last month</span>
          </div>
        </div>
        <div className={["w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0", gradient || "bg-gradient-to-br from-indigo-500 to-violet-600"].join(" ")}>
          {icon}
        </div>
      </div>
    </div>
  );
}
