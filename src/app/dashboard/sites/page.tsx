import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites | SiteHub",
  description: "Manage your connected websites and applications",
};

export default function SitesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Sites</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Site
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connected Sites</CardTitle>
            <CardDescription>
              Manage all your websites and applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Sites</TabsTrigger>
                <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                <TabsTrigger value="shopify">Shopify</TabsTrigger>
                <TabsTrigger value="custom">Custom Apps</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <SiteDetailsPlaceholder />
              </TabsContent>

              <TabsContent value="wordpress" className="space-y-4">
                <SiteDetailsPlaceholder platform="WordPress" />
              </TabsContent>

              <TabsContent value="shopify" className="space-y-4">
                <SiteDetailsPlaceholder platform="Shopify" />
              </TabsContent>

              <TabsContent value="custom" className="space-y-4">
                <SiteDetailsPlaceholder platform="Custom Apps" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function SiteDetailsPlaceholder({ platform = "All" }: { platform?: string }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-2">
        No {platform} Sites Connected
      </h3>
      <p className="text-muted-foreground mb-4">
        Connect your first site to start monitoring and managing it
      </p>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New Site
      </Button>
    </div>
  );
}
