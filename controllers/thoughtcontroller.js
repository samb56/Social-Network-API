const { User, Thoughts } = require('../models')


const thoughtController = {

  getThoughts(req, res) {
    Thoughts.find()
      .populate({ path: 'username', select: '-__v' })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  createThoughts(req, res) {
    Thoughts.create(req.body)

      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  getThoughtsId(req, res) {
    Thoughts.findOne({ _id: req.params.id })
      .populate({ path: 'username', select: '-__v' })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  deleteThoughts(req, res) {
    Thoughts.deleteOne({ _id: req.params.id })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  updateThoughts(req, res) {
    Thoughts.updateOne({ _id: req.params.id },
      {
        $set: {
          thoughtText: req.body.thoughtText,
          username: req.body.username

        }
      }

    )

      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  createReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },

      { $push: { reactions: req.body } },

    )
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  },
  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: req.params.reactionId } }
    )
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err))
  }


}
module.exports = thoughtController