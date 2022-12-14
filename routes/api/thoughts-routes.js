// require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughts-controller');

// direct to : /api/thoughts <GET>
router.route('/').get(getAllThoughts)

// direct to : /api/thoughts/:id <GET, PUT, DELETE>


// direct to : /api/thoughts/:userID <POST>


// direct to : /api/thoughts/:thoughtId/reactions <POST>


// direct to : /api/thoughts/:thoughtId/reactionId <DELETE>


// Export module router
module.exports = router;