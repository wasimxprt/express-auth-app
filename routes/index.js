import express from "express";
import userController from "../controllers/UserController";
import companyController from "../controllers/CompanyController";
let verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post("/api/user/signin", userController.postLogin);
router.post("/api/user/signup", userController.postSignup);
router.get("/api/user", verifyToken, userController.findAllUsers);
router.get("/api/user/:id", verifyToken, userController.findUserById);
router.get("/api/company/:id", companyController.findCompanyById);
router.put("/api/user/:id", verifyToken, userController.updateUser);
router.delete("/api/user/:id", verifyToken, userController.deleteUser);

module.exports = router;