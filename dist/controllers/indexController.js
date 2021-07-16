"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.createData = exports.getDataById = exports.getData = void 0;
const database_1 = require("../database");
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query(`SELECT * FROM progressboard ORDER BY id ASC`);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getData = getData;
const getDataById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM progressboard WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getDataById = getDataById;
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo, progress, done } = req.body;
    const response = yield database_1.pool.query('INSERT INTO progressboard (todo, progress, done) VALUES ($1, $2, $3)', [todo, progress, done]);
    res.json({
        message: 'Data Added successfully',
        body: {
            data: { todo, progress, done }
        }
    });
});
exports.createData = createData;
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { todo, progress, done } = req.body;
    const response = yield database_1.pool.query('UPDATE progressboard SET todo = $1, progress = $2, done = $3 WHERE id = $4', [
        todo,
        progress,
        done,
        id
    ]);
    res.json('Data Updated Successfully');
});
exports.updateData = updateData;
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield database_1.pool.query('DELETE FROM progressboard where id = $1', [
        id
    ]);
    res.json(`Data ${id} deleted Successfully`);
});
exports.deleteData = deleteData;
