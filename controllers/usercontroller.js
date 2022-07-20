const { User, Thoughts } = require('../models')

const userController = {
  //get all Users
  getUsers(req, res) {
    User.find()
      .populate({ path: 'friends', select: '-__v' })
      .populate({ path: 'thoughts', select: '-__v' })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err))

  },
  //get User by ID
  getUsersId(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({ path: 'friends', select: '-__v' })
      .populate({ path: 'thoughts', select: '-__v' })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))

  },
  //create a new user
  createUsers(req, res) {
    User.create(req.body)

      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },
  // delete a user
  deleteUsers(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },
  //update user
  updateUsers(req, res) {
    User.updateOne({ _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email
        }
      }

    )

      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },
  //add a friend for a user
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },

      { $push: { friends: req.params.friendId } },

    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },
  // delete friend from users friendlist
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  }

}

module.exports = userController