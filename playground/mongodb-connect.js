//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('unable to connect to Mongodb server');
    }

    console.log('connect to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // },(err, result)=>{
    //     if (err){
    //         return console.log('unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

 /*    db.collection('Users').insertOne({
        name: 'Worapoj Kreesuradej',
        age: 51,
        location: 'Bangkok'
        },(err, result)=>{
            if (err){
                 return console.log('unable to insert Users',err);
             }
    
             console.log(result.ops[0]._id.getTimestamp());
        }); */



    db.close();

});