const { AuthenticationError } = require('apollo-server-express'); 
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

       newLesson: async (parent, { title, subject }, context) =>{ 
           if (context.user) { 
               const lesson = await Lesson.create({
                   title, 
                   subject,
               });

               await User.findOneAndUpdate( 
                   {_id: context.user._id }, 
                   {$addToSet: { lessons: lesson._id}}
                //    enter title for the lesson we are adding
               );

               return lesson; 
           }
           throw new AuthenticationError('You need to log in'); 
       },

       updateProgress: async(parent, { title, hasCompleted }, context => { 
           if (context.user) { 
               const progress = await User.populate({ 
                   hasCompleted,
                   title,
               });

               await User.findOneAndUpdate( 
                   {_id: context.user._id},
                   {$push: { hasCompleted: _id.title  }}
                    // Need a way to add the science to the users progress
               )
           }
       } )

   }

}

module.exports = resolvers; 