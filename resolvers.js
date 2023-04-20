const Post = require("./model/model");


const resolvers = {
    Query: {
      hello: () => {
        return "Hello World";
      },
      getfullform:async(parent, args, context, info) =>{
        return await Post.findOne({shortform:args.shortform})
      },
    },
    Mutation: {
      createPost: async (parent, args, context, info) => {
        const { shortform,fullform  } = args.post;
        const post = await new Post({ shortform,fullform}).save();
        return post;
      },
      deletePost: async (parent, args, context, info) => {
        const { shortform } = args;
        await Post.findOneAndDelete({shortform});
        return "Deleted";
      },
    },
    
};

module.exports = resolvers;