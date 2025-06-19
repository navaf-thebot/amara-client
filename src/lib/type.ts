export type Report = {
    title: string;
    status: string;
    type: string;
    date: string;
    description: string;
  };

  export interface Meeting {
    title: string;
    location: string;
    status: string;
    agenda: string;
    registerButton?: string;
    joinButton?: string;
    noticeButton?: string;
    minutesButton?: string;
    resolutionsButton?: string;
    recordingButton?: string;
  }
  
  export interface Resolution {
    title: string;
    status: string;
  }

  
  export type Notice = {
    title: string;
    description: string;
    category: string;
    priority: string;
    regulatory?: string;
  };

  export type Category = {
    name: string;
  };


  export interface NewsItem {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    featured: boolean;
    tags: string[];
  }
  
  export interface Location {
    country: string;
    flag: string;
    title: string;
    company?: string;
    address: string;
    focus: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
  
  export interface CompanyStats {
    value: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }