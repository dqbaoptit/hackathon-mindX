import Api, { HOST } from '../../configs/Api';

export const GetProfile = async () => {
    try {
      const { data } = await Api.post('/user/profile');
      return data;
    } catch (err) {
      throw err;
    }
  };