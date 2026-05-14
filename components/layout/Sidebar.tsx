"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Activity, Bell, Settings, ChevronLeft, ChevronRight, Sparkles, X, Users } from 'lucide-react';

const navItems = [
  { href: "/", label: "Overview", icon: Layout },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/revenue", label: "Revenue", icon: Layout },
  { href: "/users", label: "Users", icon: Users },
  { href: "/notifications", label: "Notifications", icon: Bell, badge: 3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

function NavLinks({ onClose, showLabels }: { onClose?: () => void; showLabels: boolean }) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map(({ href, label, icon: Icon, badge }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={[
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              active
                ? "bg-gradient-to-r from-indigo-600/80 to-violet-600/60 text-white shadow-lg shadow-indigo-900/40"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            <Icon className={["w-5 h-5 flex-shrink-0", active ? "text-white" : "text-slate-400 group-hover:text-white"].join(" ")} />
            {showLabels && <span className="text-sm font-medium truncate">{label}</span>}
            {showLabels && badge && (
              <span className="ml-auto bg-indigo-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {badge}
              </span>
            )}
            {!showLabels && badge && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-400 rounded-full" />
            )}
            {!showLabels && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                {label}
              </div>
            )}
          </Link>
        );
      })}
    </>
  );
}

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className={["hidden lg:flex flex-col h-screen sticky top-0 flex-shrink-0 overflow-hidden bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white transition-all duration-300", collapsed ? "w-16" : "w-64"].join(" ")}>
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">SaaSBoard</span>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <NavLinks showLabels={!collapsed} />
        </nav>
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={onToggle}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            {collapsed ? <ChevronRight className="w-5 h-5 flex-shrink-0" /> : <ChevronLeft className="w-5 h-5 flex-shrink-0" />}
            {!collapsed && <span className="text-sm font-medium">Collapse</span>}
          </button>
          {!collapsed && (
            <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-slate-400">Logged in as</p>
              <p className="text-sm font-medium text-white mt-0.5">Admin User</p>
              <p className="text-xs text-indigo-400">admin@saasboard.io</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onMobileClose} />
          <aside className="relative flex flex-col h-full z-10 w-64 bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white">
            <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">SaaSBoard</span>
              </div>
              <button onClick={onMobileClose} className="p-1 rounded hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              <NavLinks onClose={onMobileClose} showLabels={true} />
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
