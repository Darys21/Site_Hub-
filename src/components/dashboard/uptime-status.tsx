"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UptimeRecord {
  site: string;
  uptime: number;
  status: "good" | "warning" | "critical";
}

const uptimeData: UptimeRecord[] = [
  { site: "TechDeal E-commerce", uptime: 99.9, status: "good" },
  { site: "Company Blog", uptime: 99.7, status: "good" },
  { site: "Support Portal", uptime: 98.2, status: "warning" },
  { site: "Marketing Landing Page", uptime: 85.4, status: "critical" },
];

export default function UptimeStatus() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Uptime Status</CardTitle>
        <CardDescription>Current uptime for all sites</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {uptimeData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.site}</p>
                <p className="text-sm text-muted-foreground">
                  {item.uptime}% uptime
                </p>
              </div>
              <div className="flex items-center">
                <div
                  className={`h-2 w-16 rounded-full ${getStatusColorClass(item.status)}`}
                ></div>
                <span className="ml-2 text-xs font-medium">
                  {getStatusLabel(item.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getStatusColorClass(status: UptimeRecord["status"]) {
  switch (status) {
    case "good":
      return "bg-green-500";
    case "warning":
      return "bg-amber-500";
    case "critical":
      return "bg-destructive";
    default:
      return "bg-gray-500";
  }
}

function getStatusLabel(status: UptimeRecord["status"]) {
  switch (status) {
    case "good":
      return "Good";
    case "warning":
      return "Warning";
    case "critical":
      return "Critical";
    default:
      return "Unknown";
  }
}
