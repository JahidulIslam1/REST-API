const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/contactController')

// GET

router.get('/', contactControllers.getAllContactController)

// POST

router.post('/', contactControllers.postNewContactController)
/*
// Dynamic route / variable route

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        id
    })
    }) */

// Single route

router.get('/:id', contactControllers.getSingleContact)

// PUT

router.put('/:id', contactControllers.editContact)

// DELETE

router.delete('/:id', contactControllers.deleteContact)

module.exports = router