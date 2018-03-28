var express = require('express');
var router = express.Router();
const ServerController = require('../controllers/server');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({api: 'v1'});
});

router.post('/server', ServerController.save);
router.get('/server', ServerController.consult);

module.exports = router;