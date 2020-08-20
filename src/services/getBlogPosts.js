import axios from 'axios';

const getBlogPosts = (page) => axios.get(`http://localhost:5000/posts?p=${page}`);

export default getBlogPosts;
