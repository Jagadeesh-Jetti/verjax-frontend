import api from '../../services/axios';

export const getCategories = async () => {
  const response = await api.get('/categories');
  console.log(response);
  return response.data;
};
