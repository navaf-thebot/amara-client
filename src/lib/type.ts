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
  imageSrc: string;
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

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface OtpVerificationPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  otp: string;
}

export interface EmailPayload {
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  currentUser: User;
  token: string;
}

export interface JobApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  cvDocument: File | null;
}

export interface JobState {
  loading: boolean;
  error: string | null;
  success: boolean;
}