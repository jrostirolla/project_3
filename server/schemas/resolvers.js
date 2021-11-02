const { AuthenticationError } = require('apollo-server-express');
const { Builder, User, Fish } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, arg, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id });
            }
            throw new AuthenticationError('User not detected')
        },
        fish: async (parent, arg, context) => {

        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email')
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Password incorrect')
            }

            const token = signToken(sign);

            return { token, user };
        },
        newBuild: async (parent, { temp, size, planted, centrepiece, fishAdditions, buildBy }, context) => {
            if (context.user) {
                const build = await Build.create({
                    temp,
                    size,
                    planted,
                    centrepiece,
                    fishAdditions,
                    buildBy: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: {
                        temp,
                        size,
                        planted,
                        centrepiece,
                        fishAdditions,
                        buildBy: context.user.username,
                    }}
                )
                return build;
            }
            throw new AuthenticationError('No login detected: Please login to continue')
        },

    }
}

module.exports = resolvers;