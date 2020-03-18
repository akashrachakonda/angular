const express = require('express');
// const app = express();
// const bodyparser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

//const objectId= require('mongoose').ObjectId;
const User = require('../models/user');
// const Video = require('../models/video');
// const Student = require('../models/Student');

console.log("hello world");

const db = "mongodb+srv://Akash:root@cluster1-cl1b6.mongodb.net/college";


mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
    if(err){
        console.error("Error! " + err);
    }
    else{
        console.log("connection successful...");
    }
});



router.get('/user-ret',function(req,res){
    //res.send('api works');
    console.log('Get request for all users');
    User.find({})
    .exec(function(err, users){
        if(err){
            console.log("Error retrieving users");
        }else {
            console.log("successfully retrieved users");
            console.log(users);
            res.json(users);
        }
    });
    
});




router.get('/user-ret/singleData/:id',function(req,res){
    //res.send('api works');
    console.log('Get request for single user');
    User.find({_id:req.params.id})
    .exec(function(err, users){
        if(err){
            console.log("Error retrieving users");
        }else {
            console.log("successfully retrieved user details");
            console.log(users);
            res.json(users);
        }
    });
    
});



router.post('/user-ins',function(req,res){
    //res.send('api works');
    console.log('inserting data..');
    console.log(req.baseUrl);// Example Dem for req.baseUrl
    console.log(req.body);
    //var user_instance = new User({ "name": 'David', "email": 'david@gmail.com', "password": 'david@20' });
     var user_instance = new User({ "firstName": req.body.firstName, "LastName": req.body.LastName, "email": req.body.email,"phno": req.body.phno,"gender": req.body.gender,"photo": req.body.photo });

    user_instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        else console.log("successfully inserted");
      });
    
     res.send(JSON.stringify("Succesfully registered"));

});



router.put('/user-update/:id',function(req,res){
    //res.send('api works');
    var id=req.params.id;
     console.log('Updating data..');
    console.log(req.baseUrl);// Example Dem for req.baseUrl
    console.log(req.body);

    User.findOneAndUpdate({_id:req.body.id},{$set:{"firstName": req.body.firstName, "LastName": req.body.LastName, "email": req.body.email,"phno": req.body.phno,"gender": req.body.gender}},function(err,res){
        if(err)
        console.log("error");
        else
        {
        console.log("Updated...");
        }

    });
    res.send(JSON.stringify("Succesfully Updated..."));

     
    });


    router.delete('/user-delete/:id',function(req,res){
        console.log(req.params.id);
        User.findOneAndRemove({_id:req.params.id},function(err,result){
                if(err)
                console.log("Record NOT Deleted..");
                else
                console.log(result);
        });
        res.send(JSON.stringify("record Deleted"));

    });




module.exports=router;
