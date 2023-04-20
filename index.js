const express = require('express');
const bodyParser = require('body-parser');//to convert data in json format
const {ApolloServer} = require('apollo-server-express')
// const route = require('./route/route.js');
const mongoose  = require('mongoose');
// const {gql} = require('apollo-server-express');

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //prepares the string to be sent through the network. 


mongoose.connect("mongodb+srv://Krupa0521:9Sjfpv18ExMsygiT@cluster0.sshcjwm.mongodb.net/technical?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use('/', route); 


// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });


const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(4000, () => console.log("Server UP & RUnning *4000"));
  };
  startServer();