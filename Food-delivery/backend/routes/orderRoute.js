import express from "express"
import authMiddlewar from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js"

const orderRouter=express.Router();

orderRouter.post("/place",authMiddlewar,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddlewar,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)


export default orderRouter;