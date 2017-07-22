const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').find({_id: new ObjectID('597310b743ed3e50c7502e9d')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  //   db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
  //     console.log(result);
  //   });
  //  findOneAndDelete
      db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
      });
  // // db.close();
});
