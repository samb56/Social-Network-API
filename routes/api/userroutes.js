const router = require('express').Router();
const { getUsers, getUsersId, createUsers, deleteUsers, updateUsers, createFriend, deleteFriend } = require('../../controllers/usercontroller')

router.route('/').get(getUsers).post(createUsers)
router.route('/:id').get(getUsersId).delete(deleteUsers).put(updateUsers)
router.route('/:userId/friends/:friendId').post(createFriend).put(deleteFriend)
module.exports = router;