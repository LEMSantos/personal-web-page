import axios from 'axios';

const getLatestBlogPosts = () => {
  const apiUrl = process.env.API_URL.replace(/"/g, '');
  return axios.get(`${apiUrl}/latest-posts`);
};

export default getLatestBlogPosts;
