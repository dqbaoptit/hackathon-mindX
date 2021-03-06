import { HOST } from '../configs/Api';
import axios from 'axios';

export const isAuthenticated = async (ctx, token) => {
  try {
    const { data } = await axios.get(`${HOST}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetRegisteredRoadmaps = async (ctx, token) => {
  try {
    const { data } = await axios.get(`${HOST}/user/registered-roadmaps`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
