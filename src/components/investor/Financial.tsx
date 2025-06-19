'use client';
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card/Card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/card/badge";
import { Download, Calendar, TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { Report } from "@/lib/type";

const staticMetricsData = [
    { value: "+12.5%", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "18.3%", icon: <DollarSign className="h-5 w-5" /> },
    { value: "22.1%", icon: <PieChart className="h-5 w-5" /> },
    { value: "0.45", icon: <BarChart3 className="h-5 w-5" /> }
];

const Financial = () => {
  const t = useTranslations('FinancialPage');

  const reports = t.raw('reports') as Report[];
  const translatedMetrics = t.raw('metrics') as unknown[];

  const metrics = staticMetricsData.map((metric, index) => ({
    ...metric,
    label: (translatedMetrics[index] as { label: string }).label
  }));

  return (
    <div className="min-h-screen bg-background">      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#c6a35d] mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-amber-600">{metric.value}</p>
                  </div>
                  <div className="text-amber-600">{metric.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">{t('recentReportsTitle')}</h2>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <Calendar className="mr-2 h-4 w-4" />
              {t('viewAllButton')}
            </Button>
          </div>

          <div className="grid gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={report.status === "Latest" || report.status === "Récent" || report.status === "नवीनतम" ? "default" : "secondary"} 
                               className={report.status === "Latest" || report.status === "Récent" || report.status === "नवीनतम" ? "bg-amber-600 text-black" : ""}>
                          {report.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{report.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {report.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-black">
                      <Download className="mr-2 h-4 w-4" />
                      {t('downloadPdfButton')}
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      {t('viewOnlineButton')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('commitmentTitle')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('commitmentDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                {t('subscribeButton')}
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                {t('contactButton')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Financial;