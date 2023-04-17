const { AuthenticationError } = require('apollo-server-express');
const { User, Assessment } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');
//Add boat alts per year that get added 
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
      },
      createAssessment: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res = await Assessment.create(input)
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addHull: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await Assessment.findOneAndUpdate(
              { hullNumber: input.hullNumber },
              {
                $addToSet: { hull: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addSponson: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await Assessment.findOneAndUpdate(
              { hullNumber: input.hullNumber },
              {
                $addToSet: { sponson: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addPropulsion: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await Assessment.findOneAndUpdate(
              { hullNumber: input.hullNumber },
              {
                $addToSet: { propulsion: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addPiping: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await Assessment.findOneAndUpdate(
              { hullNumber: input.hullNumber },
              {
                $addToSet: { piping: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addEngine: async (parent, { input }, context) => {
        if (context.user) {
          try {
            const res =  await Assessment.findOneAndUpdate(
              { hullNumber: input.hullNumber },
              {
                $addToSet: { engine: input },
              },
              {
                  new: true,
                  runValidators: true,
              }
            );
            return res;
          } catch (err) {
            console.log(err)
          }
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    }
  };
  
  module.exports = resolvers;