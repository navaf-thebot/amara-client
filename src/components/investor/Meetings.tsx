'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card/Card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/card/badge";
import { Calendar, Clock, MapPin, Users, FileText, Video, Download } from "lucide-react";
import { Meeting, Resolution, User } from "@/lib/type";
import AuthModal from "../../modal/AuthModal";

const upcomingMeetingsStatic = [
  { date: "December 15, 2024", time: "10:00 AM IST" }
];

const pastMeetingsStatic = [
  { date: "September 20, 2024", time: "2:00 PM IST" },
  { date: "December 18, 2023", time: "10:00 AM IST" },
  { date: "June 15, 2024", time: "11:00 AM IST" }
];

const resolutionsStatic = [
  { votes: "98.5%" },
  { votes: "95.2%" },
  { votes: "92.8%" },
  { votes: "89.3%" }
];

const Meetings = () => {
  const t = useTranslations('MeetingsPage');

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const upcomingMeetings = t.raw('upcomingMeetings') as Meeting[];
  const pastMeetings = t.raw('pastMeetings') as Meeting[];
  const resolutions = t.raw('resolutions') as Resolution[];

  const handleRegistrationClick = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    console.log("Authentication successful, user set:", user);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c6a35d] mb-4">
            {t('mainTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('mainDescription')}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t('upcomingTitle')}</h2>
          <div className="grid gap-6">
            {upcomingMeetings.map((meeting, index) => {
              const staticData = upcomingMeetingsStatic[index];
              return (
                <Card key={index} className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{meeting.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /><span>{staticData.date}</span></div>
                          <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /><span>{staticData.time}</span></div>
                          <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /><span>{meeting.location}</span></div>
                        </div>
                      </div>
                      <Badge className="bg-amber-600 text-black self-start sm:self-center">{meeting.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      <strong>{t('agendaLabel')}</strong> {meeting.agenda}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {!currentUser && (
                        <Button onClick={handleRegistrationClick} className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-black">
                          <Users className="mr-2 h-4 w-4" />
                          {meeting.registerButton}
                        </Button>
                      )}
                      <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10"><Video className="mr-2 h-4 w-4" />{meeting.joinButton}</Button>
                      <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10"><Download className="mr-2 h-4 w-4" />{meeting.noticeButton}</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t('recentResolutionsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resolutions.map((resolution, index) => {
              const staticData = resolutionsStatic[index];
              return (
                <Card key={index} className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground">{resolution.title}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 flex-shrink-0 ml-2">{resolution.status}</Badge>
                    </div>
                    <p className="text-2xl font-bold text-amber-600">{staticData.votes}</p>
                    <p className="text-sm text-muted-foreground">{t('approvalLabel')}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-foreground">{t('pastMeetingsTitle')}</h2>
            <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10 self-start sm:self-center"><FileText className="mr-2 h-4 w-4" />{t('viewArchivesButton')}</Button>
          </div>

          <div className="grid gap-6">
            {pastMeetings.map((meeting, index) => {
              const staticData = pastMeetingsStatic[index];
              return (
                <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg text-foreground mb-2">{meeting.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /><span>{staticData.date}</span></div>
                          <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /><span>{staticData.time}</span></div>
                          <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /><span>{meeting.location}</span></div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start sm:self-center">{meeting.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      <strong>{t('agendaLabel')}</strong> {meeting.agenda}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10"><Download className="mr-2 h-3 w-3" />{meeting.minutesButton}</Button>
                      <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10"><FileText className="mr-2 h-3 w-3" />{meeting.resolutionsButton}</Button>
                      <Button size="sm" variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10"><Video className="mr-2 h-3 w-3" />{meeting.recordingButton}</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {!currentUser && (
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('participationTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('participationDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleRegistrationClick} className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-black">{t('registerUpdatesButton')}</Button>
                <Button variant="outline" className="cursor-pointer border-amber-600 text-amber-600 hover:bg-amber-600/10">{t('shareholderServicesButton')}</Button>
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

export default Meetings;