// // const fs = require('fs')
// const express = require('express')
// const expressLayouts = require('express-ejs-layouts')
// // const morgan = require('morgan')
// const app = express()
// const port = 3000



// // gunakan view engine
// app.set('view engine', 'ejs');

// // third party middleware
// app.use(expressLayouts)
// // app.use(morgan('dev'))


// // Built in middleware untuk akses file kita
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))



// // Root ======================================================

// // const express = require('express')
// // const app = express()
// // const port = 3000

// app.get('/', (req, res) => {
//   // res.send('ini adalah halaman about')
//   // res.render('about', { title: 'Halaman About', layout: 'layout/main-layout'})
//   res.render('index')
// })

// app.get('/anggota', (req, res) => {
//   res.send('anggota')
// })

// app.get('/kegiatan', (req, res) => {
//   res.send('kegiatan')
// })

// app.get('/tentang', (req, res) => {
//   res.send('tentang kami')
// })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const express = require('express')
const app = express()
const port = 3000

// view engine
app.set('view engine', 'ejs')

// // Built in middleware untuk akses file kita
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index', {
    title: 'index',
  })
})

app.get('/tentang', (req, res) => {
  res.send('tentang kami')
})

app.get('/anggota', (req, res) => {
  res.send('anggota')
})

app.get('/kegiatan', (req, res) => {
  res.send('kegiatan kami')
})


app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})