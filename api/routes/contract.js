const express = require('express');
const router = express.Router();

// GET

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hey there ! I am GET Route'
    })
});

// POST

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Hey there ! I am POST Route'
    })
});
/*
// Dynamic route / variable route

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        id
    })
    })
*/
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

module.exports = router;