const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { UnauthorizedError } = require('../utils/error');

exports.authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Authentication required.');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        throw new UnauthorizedError('Invalid token.');
      }

      const user = await User.findById(decoded.userId);
      if (!user) {
        throw new UnauthorizedError('User not found.');
      }

      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};