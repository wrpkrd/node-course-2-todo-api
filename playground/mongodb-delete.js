//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('unable to connect to Mongodb server');
    }

    console.log('connect to MongoDB server');

    //deleteMany
    /* db.collection('Todos').deleteMany({text: 'Eat lunch'}).then ((result)=>{
        console.log(result);
    }); */


    //db.close();

});