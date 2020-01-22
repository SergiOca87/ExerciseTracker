const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//uri is our db uri
const uri = process.env.ATLAS_URI;

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
//we pass in our uri to mongoose.connect()
// useNewUrlParser and useUnifiedTopology are flags added since MongoDB made changes and the old
// ones are deprecrated
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });


connection.once('open', () => {
    console.log('MongoDB connection is established');
});

app.use(cors());

//Express does not need bodyParser to parse data to JSOn format anymore
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});


//Routes
const exercisesRoute = require('./routes/exercises');
const usersRoute = require('./routes/users');

app.use('/exercises', exercisesRoute);
app.use('/users', usersRoute);