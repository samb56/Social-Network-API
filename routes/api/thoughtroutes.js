const router = require('express').Router();
const { getThoughts, createThoughts, getThoughtsId, deleteThoughts, updateThoughts, createReaction, deleteReaction } = require('../../controllers/thoughtcontroller')

router.route('/').get(getThoughts).post(createThoughts)
router.route('/:id').get(getThoughtsId).delete(deleteThoughts).put(updateThoughts)
router.route('/:thoughtId/reactions/:reactionId').post(createReaction).put(deleteReaction)

module.exports = router;