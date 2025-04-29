import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Manage All Your Sites <br className="hidden md:inline" />
          From One Dashboard
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mb-8">
          SiteHub centralizes your website management, providing real-time
          analytics, automated workflows, and powerful tools to optimize your
          digital assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your sites
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="BarChart2"
              title="Unified Analytics"
              description="Monitor traffic, performance, and uptime across all your sites from a single dashboard."
            />
            <FeatureCard
              icon="Settings"
              title="Site Management"
              description="Perform bulk actions like updates, backups, and restores across multiple platforms."
            />
            <FeatureCard
              icon="Bell"
              title="Real-time Alerts"
              description="Get instant notifications about critical events like downtime or performance issues."
            />
            <FeatureCard
              icon="Link"
              title="Integration Hub"
              description="Connect with WordPress, Shopify, and custom applications through secure APIs."
            />
            <FeatureCard
              icon="Clock"
              title="Automation Center"
              description="Schedule tasks like backups, security scans, and performance optimizations."
            />
            <FeatureCard
              icon="Shield"
              title="Security Monitoring"
              description="Keep your sites secure with vulnerability scanning and threat detection."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const IconComponent = dynamic(
    () => import("lucide-react").then((mod) => mod[icon as keyof typeof mod]),
    {
      ssr: false,
      loading: () => (
        <div className="w-6 h-6 bg-muted rounded animate-pulse"></div>
      ),
    },
  );

  return (
    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
      <div className="p-3 bg-primary/10 rounded-full mb-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
}
