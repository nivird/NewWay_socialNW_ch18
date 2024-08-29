const { Schema, Types } = require('mongoose');

const dataSchema = new Schema(
  {
    dataId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    dataName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed data',
    },
    score: {
      type: Number,
      required: true,
     default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = dataSchema;
