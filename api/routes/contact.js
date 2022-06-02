const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/contactController')
const authenticate = require('../middleware/authenticate')

// GET

router.get('/', contactControllers.getAllContactController)

// POST

router.post('/', authenticate, contactControllers.postNewContactController)
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

router.put('/:id', authenticate, contactControllers.editContact)

// DELETE

router.delete('/:id', authenticate, contactControllers.deleteContact)

module.exports = router