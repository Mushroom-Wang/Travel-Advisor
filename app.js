let express = require('express');
const { Post } = require('./models/posts');
let app = express();
let mongoose = require('mongoose')
let post = require('./models/posts').Post;

mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });

let post1 = new Post({
    id: 2,
    title: 'Statue of Liberty',
    date: new Date(),
    description: 'some description',
    text: 'some text',
    country: 'USA',
    imageURL: '/images/2.jpg'
});

post1.save()

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening 3000...'));