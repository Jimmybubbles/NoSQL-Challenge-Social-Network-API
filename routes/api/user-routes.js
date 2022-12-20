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
router.route('/').get(getAllUsers).post(createUsers);

// Direct to /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers)

// Direct to /api/users/:userId/friends/:friendId <POST, DELETE>
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// Module export router
module.exports = router;

