// import axios from 'axios';

const getLatestBlogPosts = () => new Promise((resolve) => {
  setTimeout(resolve, 2000, []);
  // setTimeout(resolve, 2000, [
  //   {
  //     title: 'Frameworks Benchmark',
  //     image: require('src/assets/blog-image.png'),
  //     abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //     publishDate: '10/07/2020',
  //   },
  //   {
  //     title: 'About Remote Working',
  //     image: require('src/assets/blog-image2.png'),
  //     abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //     publishDate: '10/07/2020',
  //   },
  //   {
  //     title: 'Applying KDD Metodology to Data Science Projects',
  //     image: require('src/assets/blog-image3.png'),
  //     abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //     publishDate: '10/07/2020',
  //   },
  // ]);
});

export default getLatestBlogPosts;
