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

export const metadata: Metadata = {
  title: "Analytics | SiteHub",
  description: "View analytics for all your connected sites",
};

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>

        <Card>
          <CardHeader>
            <CardTitle>Site Analytics</CardTitle>
            <CardDescription>
              View detailed analytics for all your connected sites
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="traffic">
              <TabsList className="mb-4">
                <TabsTrigger value="traffic">Traffic</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="conversions">Conversions</TabsTrigger>
              </TabsList>

              <TabsContent value="traffic" className="space-y-4">
                <div className="h-[400px] flex items-center justify-center">
                  <AnalyticsPlaceholder
                    title="Traffic Analytics"
                    description="Visitor data across all your sites"
                  />
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-4">
                <div className="h-[400px] flex items-center justify-center">
                  <AnalyticsPlaceholder
                    title="Performance Analytics"
                    description="Page load times and core web vitals"
                  />
                </div>
              </TabsContent>

              <TabsContent value="engagement" className="space-y-4">
                <div className="h-[400px] flex items-center justify-center">
                  <AnalyticsPlaceholder
                    title="Engagement Analytics"
                    description="User engagement metrics across sites"
                  />
                </div>
              </TabsContent>

              <TabsContent value="conversions" className="space-y-4">
                <div className="h-[400px] flex items-center justify-center">
                  <AnalyticsPlaceholder
                    title="Conversion Analytics"
                    description="Conversion rates and goal completions"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function AnalyticsPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-full h-[300px] bg-muted/30 rounded-md mb-4 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
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
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}
