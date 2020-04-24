const uuid = require('uuid');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../../common/config');

const userSchema = new mongoose.Schema(
  {
    name: String,
    login: String,
    password: String,
    _id: {
      type: String,
      default: uuid,
      alias: 'id'
    }
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  if (!user) return {};
  const { id, name, login } = user;
  return { id, name, login };
};

userSchema.methods.generateAuthToken = async () => {
  const { id, login } = this;
  return jwt.sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '2h' });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
