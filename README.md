# Node.js with GraphQL

A simple case study of how to use GraphQL with Node.js

## Libraries used
- Node.js v8.1.3
- express v4.15.3
- express-graphql v0.6.6
- graphql v0.10.3

## Running the code
1. Clone this repo
2. At nodejs-graphql folder execute ```npm install``` to install all dependencies
3. Then, at the same folder, execute ```node index.js``` to start it
5. Start the server with ```rails s```
6. Using your browser, access the following url: ```http://localhost:3000/user?query={user(id:2){id,name,age,knowledge{language,frameworks}}}```

#### More examples
Return only one user:
- ```http://localhost:3000/user?query={user(id:2){id,name,age,knowledge{language,frameworks}}}```
- ```http://localhost:3000/user?query={user(id:3){id,name,age,knowledge{language}}}```
- ```http://localhost:3000/user?query={user(id:1){id,knowledge{language,frameworks}}}```
- ```http://localhost:3000/user?query={user(id:1){id,name,age}}```
- ```http://localhost:3000/user?query={user(id:2){id,name,age,knowledge{}}}```

Return all users:
- ```http://localhost:3000/user?query={users{id,name,age,knowledge{language,frameworks}}}```