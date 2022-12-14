const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const res = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return res
        }
  
        throw new AuthenticationError('Not logged in');
      }
  },
    Mutation: {
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = (user.password == password);
        
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;