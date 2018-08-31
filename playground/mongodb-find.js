//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('unable to connect to Mongodb server');
    }

    console.log('connect to MongoDB server');

    /* db.collection('Todos').find({
        _id: new ObjectID('5b87f5e15ae62f5abcd1a723')
        }).toArray().then ((docs)=>{
        console.log('Todos');
        console.log (JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    
    }); */

    /* db.collection('Todos').find().count().then ((count)=>{
        console.log('Todos count  :'+ count);
    },(err)=>{
        console.log('Unable to count todos',err);
    
    }); */

    db.collection('Users').find({
        name: 'Worapoj Kreesuradej'
        }).toArray().then ((docs)=>{
        console.log('Todos');
        console.log (JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    }); 
    

    //db.close();

});