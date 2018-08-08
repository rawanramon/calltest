const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const title = '{"LOCATION_FORMAT ":["ID","LONGITUDE","LATITUDE","TIMESTAMP","VELOCITY","DIRECTION","COUNTRY CODE","EURO VALUE","MTM"],"LOCATION":['
const pos ='["3156490059059000000",6.145409,51.381982,"2017-08-09T05:33:15Z",44,27546,"FR",4,3800]'
const trailer =']}'

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(if (!req.query.maxAge) || (req.query.maxAge== 360) {title+pos+','+pos+trailer} else {title+pos+trailer}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
