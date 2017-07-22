const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({_id: new ObjectID('59732e7f43ed3e50c7503473')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result)  => {
  console.log(result);
});

  // // db.close();
});
