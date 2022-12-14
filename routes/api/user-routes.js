// Require express router
const router = require('express').Router();

//Set requirement (from users-controller)
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend,
} = require('../../controllers/users-controller');

// Direct to /api/users <GET, POST>


// Direct to /api/users/:id <GET, PUT, DELETE>


// Direct to /api/users/:userId/friends/:friendId <POST, DELETE>


// Module export router
module.exports = router;

