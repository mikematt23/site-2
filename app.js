const path = require('path')
const express = require('express')
const db = require('./data/database')
const siteRoutes = require('./routes/siteRoutes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(siteRoutes)

db.connectToDataBase().then(function(){
  app.listen(3004)
})
