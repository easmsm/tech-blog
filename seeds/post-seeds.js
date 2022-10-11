

const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Hello World",
    "postContent": "Happy to be here",
    "userId": 1
  },
  {
    "postTitle": "Hey World",
    "postContent": "What's up?",
    "userId": 2
  },
  {
    "postTitle": "Here's a post",
    "postContent": "Post post post",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;