"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const indexController_1 = require("../controllers/indexController");
router.get('/data/api/v1.0/', indexController_1.getData);
router.get('/data/:id/api/v1.0/', indexController_1.getDataById);
router.post('/data/api/v1.0/', indexController_1.createData);
router.put('/data/:id/api/v1.0/', indexController_1.updateData);
router.delete('/data/:id/api/v1.0/', indexController_1.deleteData);
exports.default = router;
