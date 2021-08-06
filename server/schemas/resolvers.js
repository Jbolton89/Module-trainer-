const { AuthernicationError, AuthenticationError } = require('apollo-server-express'); 
const { User, Lesson } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = { 
    Query: {
        user: async () => { 
            return User.findOne({email}).populate('lessons');
        },
        users: async () => { 
            return User.find().populate('lessons');
        },
        lessons: async (parent, { email }) => { 
            const params = email ? { email } : {}; 
            return Lesson.find(params).sort({ createdAt: -1 });
        },
        lesson: async (parent, { lessonId }) => {
            return Lesson.findOne({ _id: lessonId });
        },
        me: async (parent, args, context) => { 
            if (context.user) { 
                return User.findOne({ _id: context.user._id }).populate('lessons');
            }
            throw new AuthenticationError('You need to be logged in');
        },
   },

   Mutation: { 
       newUser: async (parent, { firstName, lastName, email, password }) => { 
           const user = await User.create({ firstName, lastName, email, password });
           const token = signToken(user); 
           return { token, user };
       }, 

       login: async (parent, { email, password }) => { 
           const user = await User.findOne({ email });
           if (!user) { 
               throw new AuthenticationError('Credentials incorrect')
           }
           const correctPw = await user.isCorrectPassword(password);
           if (!correctPw) { 
               throw new AuthenticationError('Credentials incorrect')
           }

           const token = signToken(user); 

           return { token, user };
       },

   }

}

module.exports = resolvers; 