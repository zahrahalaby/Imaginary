const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/Tags', require('./Routs/tags-routs'))

app.use('/Images', require('./Routs/Images-routs'))

app.use('/tagImage', require('./Routs/imageTag-routs'))

//=========================

let port = 1597
let host = "localhost"
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});