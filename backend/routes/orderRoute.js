import express from 'express';
import authMidddleware from '../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, usersOrders, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMidddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', authMidddleware, usersOrders);
orderRouter.get('/listorders', listOrders);
orderRouter.post('/status', updateStatus);

export default orderRouter;