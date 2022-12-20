const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true)
mongoose.set('strictQuery', false)

app.listen(PORT, () => console.log(`Connected to localhost: ${PORT}`));