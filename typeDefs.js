
//describing data 

const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Post {
   id: ID
   shortform : String
   fullform : [String]
   isDeleted : Boolean
 }

 type Query{
    hello: String
    getfullform(shortform: String): Post
 }

 input PostInput {
   shortform: String
   fullform: [String]
 }
 
 type Mutation {
   createPost(post: PostInput): Post
   deletePost(shortform: String): String
 }`;

module.exports = typeDefs;