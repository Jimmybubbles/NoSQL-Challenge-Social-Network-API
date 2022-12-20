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
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// direct to : /api/thoughts/:userID <POST>
router.route('/:userId').post(createThoughts);

// direct to : /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// direct to : /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

// Export module router
module.exports = router;