import Api, { HOST } from '../../configs/Api';

export const CreateNode = async (params) => {
  try {
    const { data } = await Api.post('/nodes', params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetNode = async (NodeId) => {
  try {
    const { data } = await Api.get(`/nodes/${NodeId}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const UpdateNode = async (NodeId, params) => {
  try {
    const { data } = await Api.put(`/nodes/${NodeId}`, params);
    return data;
  } catch (err) {
    throw err;
  }
};
