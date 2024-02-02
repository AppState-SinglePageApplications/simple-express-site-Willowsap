var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');

/* GET home page. */
router.get('/', mainCtrl.home);
router.get('/about', mainCtrl.about);
router.get('/recommendations', mainCtrl.recs);

module.exports = router;
