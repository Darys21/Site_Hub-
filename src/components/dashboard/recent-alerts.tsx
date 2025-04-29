"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

interface Alert {
  id: string;
  site: string;
  message: string;
  type: "critical" | "warning" | "info" | "success";
  time: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    site: "Marketing Landing Page",
    message: "Site is down",
    type: "critical",
    time: "5 minutes ago",
  },
  {
    id: "2",
    site: "Support Portal",
    message: "High response time detected",
    type: "warning",
    time: "1 hour ago",
  },
  {
    id: "3",
    site: "Company Blog",
    message: "Plugin updates available",
    type: "info",
    time: "3 hours ago",
  },
  {
    id: "4",
    site: "TechDeal E-commerce",
    message: "Backup completed successfully",
    type: "success",
    time: "6 hours ago",
  },
];

export default function RecentAlerts() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>
          Latest notifications across your sites
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
            >
              <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
              <div>
                <p className="text-sm font-medium">{alert.message}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{alert.site}</span>
                  <span>•</span>
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getAlertIcon(type: Alert["type"]) {
  switch (type) {
    case "critical":
      return <AlertCircle className="h-4 w-4 text-destructive" />;
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    case "success":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-blue-500" />;
  }
}
