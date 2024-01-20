import axios from 'axios';

export const POST = async (path: string, data: any, token?: string) => {
  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token || null}`,
  };

  try {
    const response = await axios.post(path, data, {
      headers: header,
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GET = async (path: string, params?: Object, token?: string) => {
  const header = {
    Authorization: `Bearer ${token || null}`,
  };

  try {
    const response = await axios.get(path, {
      headers: header,
      params,
    });

    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};
