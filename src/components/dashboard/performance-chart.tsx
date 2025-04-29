"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>
          View traffic and performance data across all sites
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="traffic">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          <TabsContent value="traffic" className="space-y-4">
            <div className="h-[300px] flex items-center justify-center">
              <ChartPlaceholder
                title="Traffic Chart"
                description="Visitor counts across all sites"
              />
            </div>
          </TabsContent>
          <TabsContent value="performance" className="space-y-4">
            <div className="h-[300px] flex items-center justify-center">
              <ChartPlaceholder
                title="Performance Chart"
                description="Page load times across all sites"
              />
            </div>
          </TabsContent>
          <TabsContent value="errors" className="space-y-4">
            <div className="h-[300px] flex items-center justify-center">
              <ChartPlaceholder
                title="Error Rate Chart"
                description="Error rates across all sites"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ChartPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-full h-[200px] bg-muted/30 rounded-md mb-4 flex items-center justify-center">
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
