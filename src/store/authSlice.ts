import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  sendOtpThunk,
  verifyOtpThunk,
} from './authThunks';
import type { User } from '../lib/type';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  otpSent: boolean;
}


const saveToLocalStorage = (token: string, user: User) => {
  try {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('currentUser');
    const currentUser = userString ? JSON.parse(userString) : null;
    
    return {
      token,
      currentUser,
      isLoggedIn: !!(token && currentUser)
    };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return {
      token: null,
      currentUser: null,
      isLoggedIn: false
    };
  }
};

const clearLocalStorage = () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};


const persistedAuth = loadFromLocalStorage();

const initialState: AuthState = {
  isLoggedIn: persistedAuth.isLoggedIn,
  currentUser: persistedAuth.currentUser,
  token: persistedAuth.token,
  loading: false,
  error: null,
  otpSent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      clearLocalStorage();
      return {
        isLoggedIn: false,
        currentUser: null,
        token: null,
        loading: false,
        error: null,
        otpSent: false,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
    resetOtpState: (state) => {
      state.otpSent = false;
    },
    loadUserFromStorage: (state) => {
      const persistedAuth = loadFromLocalStorage();
      state.isLoggedIn = persistedAuth.isLoggedIn;
      state.currentUser = persistedAuth.currentUser;
      state.token = persistedAuth.token;
    },
  },
  extraReducers: (builder) => {
    builder 
      
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true; 
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      
      .addCase(verifyOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        
        const user = action.payload.currentUser || action.payload.user;
        const token = action.payload.token;
        
        state.currentUser = user;
        state.token = token;
        state.otpSent = false;
        
        
        if (user && token) {
          saveToLocalStorage(token, user);
        }
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        
        const user = action.payload.currentUser || action.payload.user;
        const token = action.payload.token;
        
        state.currentUser = user;
        state.token = token;
        
        
        if (user && token) {
          saveToLocalStorage(token, user);
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      
      .addCase(sendOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtpThunk.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { logout, clearError, resetOtpState, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;