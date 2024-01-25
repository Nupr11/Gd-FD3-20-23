import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

// PHOTO REQUESTS
export const getAllPhotos = () => axios.get(`${baseURL}/photos`);
export const getPhotoById = (photoId) =>
  axios.get(`${baseURL}/photos/${photoId}`);
export const getPhotosByAlbumId = (albumId) =>
  axios.get(`${baseURL}/photos?albumId=${albumId}`);

// USER REQUESTS
export const getAllUsers = () => axios.get(`${baseURL}/users`);
export const getUserById = (userId) => axios.get(`${baseURL}/users/${userId}`);

// ALBUM REQUESTS
export const getAllAlbums = () => axios.get(`${baseURL}/albums`);
export const getAlbumById = (albumId) =>
  axios.get(`${baseURL}/albums/${albumId}`);
export const getAlbumsByUserId = (userId) =>
  axios.get(`${baseURL}/albums?userId=${userId}`);
