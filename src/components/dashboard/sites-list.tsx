"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ExternalLink, AlertCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Site {
  id: string;
  name: string;
  url: string;
  type: string;
  status: "online" | "issues" | "offline";
  lastUpdated: string;
}

const sites: Site[] = [
  {
    id: "1",
    name: "TechDeal E-commerce",
    url: "https://techdeal-preprod.lovable.app",
    type: "Shopify",
    status: "online",
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    name: "Company Blog",
    url: "https://blog.example.com",
    type: "WordPress",
    status: "online",
    lastUpdated: "1 day ago",
  },
  {
    id: "3",
    name: "Support Portal",
    url: "https://support.example.com",
    type: "Custom App",
    status: "issues",
    lastUpdated: "3 hours ago",
  },
  {
    id: "4",
    name: "Marketing Landing Page",
    url: "https://landing.example.com",
    type: "Static Site",
    status: "offline",
    lastUpdated: "5 minutes ago",
  },
];

export default function SitesList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Connected Sites</CardTitle>
          <CardDescription>
            Manage your connected websites and applications
          </CardDescription>
        </div>
        <Button size="sm">Add Site</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sites.map((site) => (
            <div
              key={site.id}
              className="flex items-center justify-between p-3 border rounded-md"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <span className="font-medium">{site.name.charAt(0)}</span>
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(site.status)}`}
                  ></div>
                </div>

                <div>
                  <div className="font-medium">{site.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <span>{site.url}</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant="outline">{site.type}</Badge>
                {site.status === "issues" && (
                  <div className="text-amber-500 flex items-center gap-1 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Issues detected</span>
                  </div>
                )}
                {site.status === "offline" && (
                  <div className="text-destructive flex items-center gap-1 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Offline</span>
                  </div>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Run Update</DropdownMenuItem>
                    <DropdownMenuItem>Create Backup</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Remove Site
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getStatusColor(status: Site["status"]) {
  switch (status) {
    case "online":
      return "bg-green-500";
    case "issues":
      return "bg-amber-500";
    case "offline":
      return "bg-destructive";
    default:
      return "bg-gray-500";
  }
}
