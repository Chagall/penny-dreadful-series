var express = require('express');
var router = express.Router();

/* GET episodes page. */
router.get('/', function(req, res) {
    res.render('episodes');
});

module.exports = router;
