const express = require("express");
const app = express();
app.listen(2424);
app.get('/', (request, response) => {
    response.sendFile(__dirname+'/index.html');
});