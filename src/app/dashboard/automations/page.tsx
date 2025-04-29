import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Clock, RefreshCw, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Automations | SiteHub",
  description: "Configure automated tasks for your websites",
};

export default function AutomationsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Automations</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Automation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AutomationCard
            title="Scheduled Backups"
            description="Automatically backup your sites on a regular schedule"
            icon={Clock}
            status="Active"
          />

          <AutomationCard
            title="Content Updates"
            description="Automatically update content across multiple sites"
            icon={RefreshCw}
            status="Inactive"
          />

          <AutomationCard
            title="Security Scans"
            description="Regular security scans to detect vulnerabilities"
            icon={Shield}
            status="Active"
          />

          <AutomationCard
            title="Performance Optimization"
            description="Automatically optimize site performance"
            icon={Zap}
            status="Inactive"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Automation History</CardTitle>
            <CardDescription>
              Recent automation runs and their results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                No Automation History
              </h3>
              <p className="text-muted-foreground mb-4">
                Create and run your first automation to see results here
              </p>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Automation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function AutomationCard({
  title,
  description,
  icon: Icon,
  status,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  status: "Active" | "Inactive";
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-primary/10 rounded-md">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium ${status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`}
          >
            {status}
          </div>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            Configure
          </Button>
          <Button variant="ghost" size="sm">
            {status === "Active" ? "Disable" : "Enable"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
