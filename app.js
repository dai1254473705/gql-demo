/**
 * 入口文件
 * https://github.com/heiyu4585/graphql-express-mysql 参考
 */
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'daiyunzhou',
  password : 'daiyunzhou',
  database : 'hope'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
/**
 * schema
 */
const schema = buildSchema(`
  type Query {
    userInfo: User
  }
  type User {
    id: ID
    name: String
  }
`);

const root = { 
  userInfo:(res)=>{
    console.log('res===',res);
    return {
      id: 123123,
      name: '哈哈', 
    }
  }
};

app.all('*',(req, res, next)=>{
  console.log('header',req.method);
  res.set({
    'Access-Control-Allow-Origin': req.headers.origin || '*'
  })
  req.method === 'OPTIONS' ? res.status(204).end() : next();
});


app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log(
`Now browse to 
  http://localhost:4000/graphql
`));
