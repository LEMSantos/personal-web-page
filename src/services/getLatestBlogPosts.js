import axios from 'axios';

const getLatestBlogPosts = () => axios.get('http://localhost:5000/latest-posts');

export default getLatestBlogPosts;
