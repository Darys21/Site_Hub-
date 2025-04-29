import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/layout";
import OverviewStats from "@/components/dashboard/overview-stats";
import SitesList from "@/components/dashboard/sites-list";
import RecentAlerts from "@/components/dashboard/recent-alerts";
import PerformanceChart from "@/components/dashboard/performance-chart";
import UptimeStatus from "@/components/dashboard/uptime-status";

export const metadata: Metadata = {
  title: "Dashboard | SiteHub",
  description: "Monitor and manage all your websites from one place",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <OverviewStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <div>
            <UptimeStatus />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SitesList />
          </div>
          <div>
            <RecentAlerts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
