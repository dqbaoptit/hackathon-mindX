import Api, { HOST } from '../../configs/Api';

export const ListRoadmaps = async (filter) => {
  try {
    const route = filter ? `/roadmaps?field=${filter}` : `/roadmaps`;
    const { data } = await Api.get(`${route}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const CreateRoadmap = async ({ params }) => {
  try {
    const { data } = await Api.post('/roadmaps', params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetRoadmapById = async (id) => {
  try {
    const { data } = await Api.get(`/roadmaps/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};
export const GetNodesOfRoadmap = async (id) => {
  try {
    const { data } = await Api.get(`/roadmaps/${id}/nodes`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const AddNodeToRoadmap = async (id, node) => {
  try {
    const { data } = await Api.post(`/roadmaps/${id}/nodes`, node);
    return data;
  } catch (err) {
    throw err;
  }
};
