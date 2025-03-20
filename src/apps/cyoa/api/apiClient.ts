﻿import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const apiClient = axios.create({
  baseURL: `${serverUrl}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
