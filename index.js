const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const users = require('./schema')
const app = express()

app.use('/user', graphqlHTTP({ schema: users, pretty: true }))
app.listen(3000, function() {
    console.log('Server on.')
})
