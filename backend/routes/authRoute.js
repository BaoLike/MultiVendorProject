const authController = require('../controllers/authController');
const { authMiddleware } = require('../midlewares/authMiddleware');

const router = require('express').Router();

router.post('/admin/login', authController.AdminLogin)
router.get('/getUsers', authMiddleware, authController.getUser);

module.exports = router