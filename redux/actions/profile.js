import Api, { HOST } from '../../configs/Api';
import { ApiError } from 'next/dist/next-server/server/api-utils';

export const GetProfile = async () => {
  try {
    const { data } = await Api.get('/user/profile');
    return data;
  } catch (err) {
    throw err;
  }
};

export const UpdateProfile = async (params) => {
  try {
    const { data } = await Api.put('/user/profile', params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const ChangePassword = async (params) => {
  try {
    const { data } = await Api.post('/user/change-password', params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetRegisteredRoadmaps = async () => {
  try {
    const { data } = await Api.get('/user/registered-roadmaps');
    return data;
  } catch (err) {
    throw err;
  }
};

export const RegisterRoadmap = async (roadmapId) => {
  try {
    const { data } = await Api.post(`/user/registered-roadmaps`, { roadmapId });
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetProgress = async (roadmapId) => {
  try {
    const { data } = await Api.get(`/user/registered-roadmaps/${roadmapId}`);
    return data;
  } catch (err) {
    throw err;
  }
};
export const MarkANode = async (roadmapId, finishedNodeId) => {
  try {
    const { data } = await Api.put(`/user/registered-roadmaps/${roadmapId}`, {
      finishedNodeId,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
