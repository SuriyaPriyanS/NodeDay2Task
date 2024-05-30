import express from 'express';
import { createRoom, detelted, editeDetails, getBookingDetail, getBookingDetaildByid } from '../Controllers/bookingControllers.js';






const router = express.Router();
router.get('/booking',getBookingDetail)
router.get('/booking/:id',getBookingDetaildByid)
router.post('/creatroom',createRoom)
router.put('/edite/:id',editeDetails)
router.delete('/delted/:id',detelted)



export default router;