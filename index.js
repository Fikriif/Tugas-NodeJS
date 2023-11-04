const express = require('express');

const app = express();

app.use (() => {
    console.log('hello server1....');
    console.log('hello server2....');
    console.log('hello server3....');
    console.log('hello server4....');
})

app.listen(4000);