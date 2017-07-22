const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined));
  });

// db.collection('Users').insertOne({
//   _id: 123,
//   name: 'Sumit',
//   age: 25,
//   location: 'Noida'
// }, (err, result) => {
//   if(err){
//     return console.log('Unable to insert user', err);
//   }
//
//   console.log(result.ops);
// });

  db.close();
});
