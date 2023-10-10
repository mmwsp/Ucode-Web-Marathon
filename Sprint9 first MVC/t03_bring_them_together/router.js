const express = require('express');
const controller = require('./controller');
const jsonParser = express.json();
const router = express.Router();

router.get('/', controller.getStart);
router.get('/logout', jsonParser, controller.logout);
router.get('/main', controller.checkMain);
router.get('/style.css', controller.getStyle);
router.get('/registration', controller.checkReg);
router.get('/login', controller.checkLog);
router.get('/remind', controller.checkReminder);

router.post('/registration', jsonParser , controller.registration);
router.post('/login', jsonParser, controller.login);
router.post('/remind', jsonParser, controller.remind);
router.post('/changeData', jsonParser, controller.changeData);

module.exports = router;