//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('unable to connect to Mongodb server');
    }

    console.log('connect to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b87fe1e43de91a3b206ffb8')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }). then((result)=>{
        console.log(result);
    });
    


    //db.close();

});