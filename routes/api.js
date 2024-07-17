/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

const { default: mongoose } = require("mongoose");
const { Book, Comment } = require("../model/model");
require('dotenv').config();

const url = process.env.MONGO_URL;

// connect to mongodb
mongoose.connect(url);

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })
    
    .post(async function (req, res){
      let title = req.body.title;
      //response will contain new book object including atleast _id and title
      // check title input
      if(!title){
        res.send('missing required field title');
        return;
      };
      // add new book to database
      try {
        const newBook = new Book({
          title: title,
          commentcount: 0
        });
        const savedBook = await newBook.save();
        res.json({
          _id: savedBook._id,
          title: savedBook.title
        });
        console.log('successfully add new book');
      } catch (error) {
        console.log('can not add new book:', error);
      }
    })
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
  
};
