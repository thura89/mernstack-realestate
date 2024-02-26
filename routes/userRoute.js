import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
} from "../controller/userController.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);
router.post("/allbookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
export { router as userRoute };
