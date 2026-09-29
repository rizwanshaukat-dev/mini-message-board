const express = require('express');
const router= express.Router();
const controller=require("../controllers/messageController");

router.get('/',controller.getMessages);
router.get('/message/:id',controller.getAMessage);
router.get('/new',controller.getForm);
router.post('/new',controller.createMessage);

module.exports = router;