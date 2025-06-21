'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card/Card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/card/badge";
import { AlertTriangle, FileText, Calendar, Download, Search, Filter, Globe, Scale, Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Category, Notice, User } from "@/lib/type";
import { Link } from "@/i18n/navigation";
import AuthModal from "../../modal/AuthModal";

const urgentNoticesStatic = [
  { date: "November 28, 2024" },
  { date: "November 25, 2024" }
];

const recentNoticesStatic = [
  { date: "November 20, 2024" },
  { date: "November 15, 2024" },
  { date: "November 10, 2024" },
  { date: "November 5, 2024" },
  { date: "October 28, 2024" }
];

const categoriesStatic = [
  { count: 12, icon: <Scale className="h-4 w-4" /> },
  { count: 8, icon: <Building className="h-4 w-4" /> },
  { count: 6, icon: <FileText className="h-4 w-4" /> },
  { count: 4, icon: <Globe className="h-4 w-4" /> },
  { count: 15, icon: <Building className="h-4 w-4" /> },
];

const Notices = () => {
  const t = useTranslations('NoticesPage');

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const urgentNoticesSource = (t.raw('urgentNotices') as Notice[]).map((notice, index) => ({
    ...notice,
    date: urgentNoticesStatic[index]?.date || 'N/A', 
  }));

  const recentNoticesSource = (t.raw('recentNotices') as Notice[]).map((notice, index) => ({
    ...notice,
    date: recentNoticesStatic[index]?.date || 'N/A',
  }));

  const categories = t.raw('categories') as Category[];

  const handleSubscribeClick = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };
  
  const filterNotices = (notices: (Notice & { date: string })[]) => {
    return notices.filter(notice => {
      const matchesCategory = !activeCategory || notice.category === activeCategory;
      const matchesSearch = searchQuery === "" ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };
  
  const filteredUrgentNotices = filterNotices(urgentNoticesSource);
  const filteredRecentNotices = filterNotices(recentNoticesSource);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(prev => (prev === categoryName ? null : categoryName));
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory(null);
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high": case "élevée": case "उच्च":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      case "medium": case "moyenne": case "मध्यम":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
      case "low": case "faible": case "कम":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };

  const noResults = filteredUrgentNotices.length === 0 && filteredRecentNotices.length === 0;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#c6a35d] mb-4">
            {t('mainTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('mainDescription')}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('searchInputPlaceholder')}
                className="pl-10 border-amber-200 focus:border-amber-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={clearFilters} variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <Filter className="mr-2 h-4 w-4" />
              {t('filterButton')}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => {
            const staticData = categoriesStatic[index];
            return (
              <Card 
                key={index} 
                onClick={() => handleCategoryClick(category.name)}
                className={`border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all cursor-pointer ${
                  activeCategory === category.name ? 'ring-2 ring-amber-600' : 'hover:ring-1 hover:ring-amber-400'
                }`}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2 text-amber-600">
                    {staticData.icon}
                  </div>
                  <h3 className="font-medium text-foreground">{category.name}</h3>
                  <p className="text-2xl font-bold text-amber-600">{staticData.count}</p>
                  <p className="text-xs text-muted-foreground">{t('activeNoticesLabel')}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {noResults ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">{t('noResultsFound')}</p>
          </div>
        ) : (
          <>
            {filteredUrgentNotices.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-semibold text-foreground">{t('urgentNoticesTitle')}</h2>
                </div>
                <div className="grid gap-6">
                  {filteredUrgentNotices.map((notice, index) => (
                    <Card key={notice.title + index} className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-foreground mb-2">{notice.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4">
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{notice.date}</span>
                              </div>
                              <Badge variant="secondary">{notice.category}</Badge>
                              <Badge className={getPriorityColor(notice.priority)}>
                                {t('priorityLabel', { priority: notice.priority })}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-4">
                          {notice.description}
                        </CardDescription>
                        <div className="flex gap-2">
                          <Button size="sm" className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-black">
                            <Download className="mr-2 h-4 w-4" />
                            {t('downloadNoticeButton')}
                          </Button>
                          <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
                            {t('viewDetailsButton')}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {filteredRecentNotices.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-foreground">{t('recentNoticesTitle')}</h2>
                  <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
                    <FileText className="mr-2 h-4 w-4" />
                    {t('viewAllButton')}
                  </Button>
                </div>
                <div className="grid gap-6">
                  {filteredRecentNotices.map((notice, index) => (
                    <Card key={notice.title + index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg text-foreground mb-2">{notice.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4">
                              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                <Calendar className="h-3 w-3" />
                                <span>{notice.date}</span>
                              </div>
                              <Badge variant="secondary">{notice.category}</Badge>
                              <Badge className={getPriorityColor(notice.priority)}>
                                {notice.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-3">
                          {notice.description}
                        </CardDescription>
                        {notice.regulatory && (
                          <p className="text-xs text-muted-foreground mb-4">
                            <strong>{t('regulatoryAuthorityLabel')}</strong> {notice.regulatory}
                          </p>
                        )}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
                            <Download className="mr-2 h-3 w-3" />
                            {t('downloadButton')}
                          </Button>
                          <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
                            <FileText className="mr-2 h-3 w-3" />
                            {t('viewButton')}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {!currentUser && (
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('complianceStatusTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('complianceStatusDescription')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">100%</p>
                  <p className="text-sm text-muted-foreground">{t('onTimeFilingsLabel')}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">24hrs</p>
                  <p className="text-sm text-muted-foreground">{t('avgResponseTimeLabel')}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">5+</p>
                  <p className="text-sm text-muted-foreground">{t('regulatoryBodiesLabel')}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleSubscribeClick} className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-black">
                  {t('subscribeButton')}
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">
                    {t('contactButton')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Notices;