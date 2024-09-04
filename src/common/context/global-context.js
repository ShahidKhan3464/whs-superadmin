'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import makeRequest from '../api/axios.config';
import { API_ENDPOINTS } from '../api/endpoints';
import { HTTP } from '../constants/http-methods.constant';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfileData = async () => {
    try {
      const response = await makeRequest(HTTP.GET, API_ENDPOINTS.VIEW_PROFILE);
      response?.data?.status ? setProfile(response.data.result.data) : null;
    } finally {
      // console.error('Failed to fetch profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        profile,
        setLoading,
        setProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
