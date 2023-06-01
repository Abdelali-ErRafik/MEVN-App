//imports
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');


const app = express();

//Load config
dotenv.config({ path: './config/config.env' })

//Port
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./uploads'));

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
}).then(() => {
    console.log('Connected to mongodb');
}).catch(err => {
    console.log(err);
});


//Routes
app.use('/api/post', require('./routes/routes'));

//start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});