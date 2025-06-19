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