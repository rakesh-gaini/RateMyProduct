const express = require('express');
require('./services/passport')

const app = express();

require('./routes/authRoutes')(app);

// app.get('/', (req, res) => {
//     res.send("Hello, I'm Rakesh!");
// })

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log("Listening on "+PORT);
})