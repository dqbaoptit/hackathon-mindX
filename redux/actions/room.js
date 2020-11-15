import Api, { HOST } from '../../configs/Api';
import { ApiError } from 'next/dist/next-server/server/api-utils';

export const createRooms = async (roadmapId) => {
  try {
    const { data } = await Api.post(`/rooms`, { roadmapId });
    return data;
  } catch (err) {
    throw err;
  }
};
