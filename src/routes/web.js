const express = require('express');

const {getHomePage, postCreateUser, createUser, getUpdateUser, postUpdateUser} = require('../controllers/homeController');

const router = express.Router();

router.get('/',getHomePage);

router.get('/create',createUser);
router.post('/create-user',postCreateUser)

router.get('/update/:userId',getUpdateUser);
router.post('/update-user',postUpdateUser)

module.exports = router;

