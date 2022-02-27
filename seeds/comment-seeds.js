const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "i like this !"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I like pizza ."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "whats going on around the world?"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "do people really like pinaapple pizza?"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "go!!! cavs"
    },
   
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;