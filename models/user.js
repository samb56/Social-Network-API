const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: { type: String, required: true, unqiue: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/] },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],

})

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const User = model('user', userSchema);
module.exports = User;