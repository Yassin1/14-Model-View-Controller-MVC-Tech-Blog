const { User } = require('../models');

const userData = [
    {
        username: "yassin",
        twitter: "-yassin",
        github: "yassin2",
        email: "yassin@gmail.com",
        password: "yassin123123"
    },
    {
        username: "jack",
        twitter: "jack-12",
        github: "jack14",
        email: "jack@gmail.com",
        password: "jack12345"
    },
    {
        username: "moh",
        twitter: "mommh",
        github: "mom88",
        email: "mom@gmail.com",
        password: "momom"
    },
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;