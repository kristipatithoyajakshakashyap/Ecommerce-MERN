import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  testController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
// REGISTER || METHOD: POST
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected USER router
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//PROTECTED ADMIN ROUTE
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// UPDATE PROFILE
router.put("/profile", requireSignIn, updateProfileController);

// ORDERS
router.get("/orders", requireSignIn, getOrdersController);

// GET ALL ORDERS
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// ORDER UPDATE 
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)
export default router;
