import Api, { HOST } from '../../configs/Api';

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