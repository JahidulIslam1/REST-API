const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// GET

router.get('/', (req, res, next) => {
    Contact.find()
    .then(contacts =>{
        res.status(200).json({
            message: 'All Contracts',
            contacts
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error: err
        })
    })
});

// POST

router.post('/', (req, res, next) => {

    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contact.save()
        .then(data => {
            return res.status(201).json({
                message: 'New Contact Added',
                contact: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
});

// Dynamic route / variable route

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        id
    })
    })

// Single route

router.get('/:id', (req, res, next) => {
    res.json({
        message: 'I am Single Contact'
    })
    })

// PUT

router.put('/:id', (req, res, next) => {
    res.status(202).json({
        message: 'Hey there ! I am PUT Route'
    })
});

// DELETE

router.delete('/:id', (req, res, next) => {
    res.status(203).json({
        message: 'Hey there ! I am DELETE Route'
    })
});

module.exports = router