// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update to match your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5MDMzMjgwLCJpYXQiOjE3MTkwMzI5ODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE5NmI2ZWFmLTMyMTYtNGJlZC05N2IwLWZiYTMyMzQzYjU4NyIsInN1YiI6IjIxcjExYTA1NTBAZ2V0LmVkdS5pbiIsImNsaWVudFNlY3JldCI6Ikp2V3hia2plcFhFbGxtR3ciLCJvd25lck5hbWUiOiJWZW5rYXRlc2giLCJvd25lckVtYWlsIjoiMjFyMTFhMDU1MEBnY2V0LmVkdS5pbiIsInJvbGxObyI6IjIxUjExQTA1NTAifQ._qkcWlnIe4S3PBGrceWi1CsMI6b3O8apcKChPJ1Hodc`,
  },
});

export default api;
