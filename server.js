const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const res = require('express/lib/response')
const contactRoute = require('./api/routes/contact')

const app = express()
app.use(morgan('dev'))

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


const PORT = process.env.PORT || 3000


app.use('/api/contacts', contactRoute);

app.get('/', (req, res) => {
    res.send('<div><h1>Hello World</h1><p>Hey There ! How can i help you.<p></div>')
})

app.get('/api/contacts', (req, res) => {
    res.json(contacts)
});

app.post('/api/contacts', (req, res) => {
    res.json({
        message: 'I am Post Method'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const contacts = [
    {   
        name: 'Md. Jahidul Islam',
        email: 'example.com@gmail.com',
        phone: '017********',
        Address: '208-Fokirapool, Motijheel, Dhaka-1000',
        Birth_Date: '25th April 1999'
    },
    {
        name: 'Md. Sahidul Islam',
        email: 'example.com@gmail.com',
        phone: '017*******',
        Address: '208-Fokirapool, Motijheel, Dhaka-1000',
        Birth_Date: '1st Jan 1965'
    },
    {
        name: 'Md. Abul Hossain',
        email: 'example.com@gmail.com',
        phone: '01787747450',
        Address: '208-Fokirapool, Motijheel, Dhaka-1000',
        Birth_Date: '20th May 1990'
    },
]