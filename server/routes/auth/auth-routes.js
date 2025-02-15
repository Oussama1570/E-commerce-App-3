const express = require('express');
const {
  registerUser,
  loginUser, 
  logoutUser, 
  authMiddleware,
} = require('../../controllers/auth/auth-controller');

const router = express.Router();

// Define the routes and associate them with controller functions
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
  
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

// Export the router, not the controller functions
module.exports = router;  // Change from exporting individual functions to exporting the router
