import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/layout";
import OverviewStats from "@/components/dashboard/overview-stats";
import SitesList from "@/components/dashboard/sites-list";
import RecentAlerts from "@/components/dashboard/recent-alerts";
import PerformanceChart from "@/components/dashboard/performance-chart";
import UptimeStatus from "@/components/dashboard/uptime-status";

// Metadata for the dashboard page
export const metadata: Metadata = {
  title: "Dashboard | SiteHub",
  description: "Monitor and manage all your websites from one place",
};

// Dashboard page component
export default function DashboardPage() {
  return (
    // Using the DashboardLayout for consistent structure
    <DashboardLayout>
      {/* Main content container */}
      <div className="flex flex-col gap-6">
        {/* Page title */}
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        {/* Overview statistics component */}
        <OverviewStats />

        {/* Grid for performance chart and uptime status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance chart spanning two columns on large screens */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          {/* Uptime status component */}
          <div>
            <UptimeStatus />
          </div>
        </div>

        {/* Grid for sites list and recent alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sites list spanning two columns on large screens */}
          <div className="lg:col-span-2">
            <SitesList />
          </div>
          {/* Recent alerts component */}
          <div>
            <RecentAlerts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
