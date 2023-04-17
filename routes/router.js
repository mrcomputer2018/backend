const express = require('express');

const router = express.Router();

//Rotas
router.get('/tasks', (req, res) => {
    res.json({ msg: 'Hello World!!!' });
});

module.exports = router;