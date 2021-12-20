let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');

//Liste des routes vers les contrôleurs
router.get('/', userController.home);

router.get('/login', userController.login);

router.get('/basket', userController.basket);

router.get('/flogin', userController.flogin);


module.exports = router;