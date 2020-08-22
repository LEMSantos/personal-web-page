import axios from 'axios';

const getBlogPosts = (page) => {
  const apiUrl = process.env.API_URL.replace(/"/g, '');
  return axios.get(`${apiUrl}/posts?p=${page}`);
};

export default getBlogPosts;
