import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';
import type {
  LoginCredentials,
  RegisterCredentials,
  OtpVerificationPayload,
  EmailPayload,
  JobApplicationPayload,
} from '../lib/type';
import axiosInstance from '@/lib/axiosInstance';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL || 'http://localhost:5000'}/api/auth`,
});

const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  }
  return 'An unknown error occurred';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (creds: RegisterCredentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/register', creds);
      return response.data; 
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  'auth/verifyOtp',
  async (payload: OtpVerificationPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/verify-otp', payload);
      return response.data; 
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (creds: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/login', creds);
      return response.data; 
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);

export const sendOtpThunk = createAsyncThunk(
  'auth/sendOtp',
  async ({ email }: EmailPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/send-otp', { email });
      return response.data; 
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);


export const applyJobThunk = createAsyncThunk(
  'jobs/apply',
  async (payload: JobApplicationPayload, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('fullName', payload.fullName);
      formData.append('email', payload.email);
      formData.append('phone', payload.phone);
      formData.append('coverLetter', payload.coverLetter);

      if (payload.cvDocument) {
        formData.append('cvDocument', payload.cvDocument);
      }
      const response = await axiosInstance.post('/api/jobs/apply', formData, {
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(getErrorMessage(err));
    }
  }
);