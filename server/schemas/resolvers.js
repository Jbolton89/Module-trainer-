const { AuthernicationError } = require('apollo-server-express'); 
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = { 
    Query: {
        users: async () => { 
            return User.find()
            // Do I need to populate another field after find() i.e. populate('field')
        }


    }

}