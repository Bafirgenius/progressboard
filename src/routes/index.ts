import { Router } from "express";
const router = Router();

import {getData,getDataById,createData,updateData,deleteData} from "../controllers/indexController"

router.get('/data/api/v1.0/', getData);
router.get('/data/:id/api/v1.0/', getDataById);
router.post('/data/api/v1.0/', createData);
router.put('/data/:id/api/v1.0/', updateData);
router.delete('/data/:id/api/v1.0/', deleteData);

export default router;
