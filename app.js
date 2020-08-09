require('./config/db')
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


// Routes de Carreras.


app.use(require('./routes/CareersRoutes'))
app.use(require('./routes/StudentsRoutes'))


app.listen(8080, console.log('Listen on port 8080'))