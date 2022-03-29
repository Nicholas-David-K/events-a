const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');



const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routesHandler);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});