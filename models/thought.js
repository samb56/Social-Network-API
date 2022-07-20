const { Schema, model } = require('mongoose');
const dateFormat = require('../util/helpers');
const { schema } = require('./user');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,

    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }

  })


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionSchema
    ],

  })

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

const Thoughts = model('thought', thoughtSchema);
module.exports = Thoughts;