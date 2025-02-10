const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

// Get all users
router.get('/', authMiddleware.verifyToken, userController.getAllUsers);

// Get a single user by ID
router.get('/:id', authMiddleware.verifyToken, userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update a user by ID
router.put('/:id', authMiddleware.verifyToken, userController.updateUser);

// Delete a user by ID
router.delete('/:id', authMiddleware.verifyToken, userController.deleteUser);

module.exports = router;
