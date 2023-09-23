const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: Schema.Types.ObjectId,
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toDateString()
  }
});

module.exports = reactionSchema;
