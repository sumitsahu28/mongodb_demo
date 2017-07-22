const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5973091f13a23b027a2ec336')
}, {
  $set: {
    name: 'Sumit Sahu'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result)  => {
  console.log(result);
});

  // // db.close();
});
