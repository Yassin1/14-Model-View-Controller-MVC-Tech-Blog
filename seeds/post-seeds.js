const { Post } = require('../models');

const postData = [
    {
        title: "i like the lakers  ",
        post_content: "i grew up watching  the lakers dominate the legue they hold a special place in my heart",
        user_id: 3
    },
    {
        title: "is america the greatest country around the world?",
        post_content: "That America is the greatest country today and in the history of mankind is of no doubt. ",
        user_id: 1
    },
    {
        title: "My first date?",
        post_content: "I  was eight years old and it was a terfying suition to be in",
        user_id: 2

    },
    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;