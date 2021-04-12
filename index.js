const express = require('express')
const path = require('path');
const app = express()
const logger = require('./middleware/logger')
//init middleware
app.use(logger)
//Body Parser Middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))


//set static folder

app.use(express.static(path.join(__dirname,'public')))

//member API routes
app.use('/api/members', require('./routes/api/members'))
const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`))