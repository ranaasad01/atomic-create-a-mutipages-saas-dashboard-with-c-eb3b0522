"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import KpiCard from "@/components/dashboard/KpiCard";
import RevenueLineChart from "@/components/dashboard/RevenueLineChart";
import UserGrowthBarChart from "@/components/dashboard/UserGrowthBarChart";
import TrafficDonutChart from "@/components/dashboard/TrafficDonutChart";
import { kpiData } from "@/lib/mock-data";
import { DollarSign, Users, TrendingDown, Activity } from 'lucide-react';

const kpiCards = [
  {
    ...kpiData.revenue,
    icon: <DollarSign className="w-5 h-5" />,
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
  {
    ...kpiData.users,
    icon: <Users className="w-5 h-5" />,
    gradient: "bg-gradient-to-br from-violet-500 to-violet-700",
  },
  {
    ...kpiData.mrr,
    icon: <Activity className="w-5 h-5" />,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    ...kpiData.churn,
    icon: <TrendingDown className="w-5 h-5" />,
    gradient: "bg-gradient-to-br from-rose-500 to-rose-700",
  },
];

export default function OverviewPage() {
  return (
    <DashboardLayout breadcrumbs={[{ label: "Dashboard" }, { label: "Overview" }]}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {kpiCards.map((card) => (
            <KpiCard
              key={card.label}
              label={card.label}
              value={card.value}
              change={card.change}
              trend={card.trend as "up" | "down"}
              icon={card.icon}
              gradient={card.gradient}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <RevenueLineChart />
          </div>
          <div>
            <TrafficDonutChart />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <UserGrowthBarChart />
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New enterprise signup", detail: "GlobalTech Ltd. — Enterprise plan", time: "2 min ago", color: "bg-indigo-500" },
                { action: "Payment received", detail: "Invoice #1042 — $1,200", time: "18 min ago", color: "bg-emerald-500" },
                { action: "User churned", detail: "Henry Brown — Professional plan", time: "1 hr ago", color: "bg-rose-500" },
                { action: "Plan upgraded", detail: "TechStart Inc. — Starter to Business", time: "3 hrs ago", color: "bg-violet-500" },
                { action: "API limit warning", detail: "85% of monthly quota used", time: "5 hrs ago", color: "bg-amber-500" },
                { action: "New user signup", detail: "Sarah Connor — Professional plan", time: "6 hrs ago", color: "bg-blue-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={"w-2 h-2 rounded-full mt-1.5 flex-shrink-0 " + item.color} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{item.detail}</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Avg. Session", value: "4m 32s", sub: "+12s from last week" },
            { label: "Bounce Rate", value: "34.2%", sub: "-2.1% improvement" },
            { label: "Conversion Rate", value: "3.8%", sub: "+0.4% this month" },
            { label: "Support Tickets", value: "12 open", sub: "3 resolved today" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
