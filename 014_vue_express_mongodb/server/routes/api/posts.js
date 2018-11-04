const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

const url = "mongodb://localhost:27017";
const dbName = 'vue_express';

//get posts
router.get('/',async (req,res) => {
    const posts = await loadPostsCollections();
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/',async (req,res) => {
    const posts = await loadPostsCollections();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send();
});

//delet posts
router.delete('/:id',async (req,res) => {
    const posts = await loadPostsCollections();
    await posts.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    res.status(200).send();
});




async function loadPostsCollections(params) {
    const client = await mongodb.MongoClient.connect
    (url,{
        useNewUrlParser: true
    })
    return client.db(dbName).collection('posts');
}

module.exports =router;