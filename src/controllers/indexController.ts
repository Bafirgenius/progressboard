import {Request, Response} from 'express'
import { QueryResult } from 'pg'

import { pool } from '../database'

export const getData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query(`SELECT * FROM progressboard ORDER BY id ASC`);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getDataById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM progressboard WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createData = async (req: Request, res: Response) => {
    const { todo, progress, done } = req.body;
    const response = await pool.query('INSERT INTO progressboard (todo, progress, done) VALUES ($1, $2, $3)', [todo, progress, done]);
    res.json({
        message: 'Data Added successfully',
        body: {
            data: { todo, progress, done }
        }
    })
};

export const updateData = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { todo, progress, done } = req.body;

    const response = await pool.query('UPDATE progressboard SET todo = $1, progress = $2, done = $3 WHERE id = $4', [
        todo,
        progress,
        done,
        id
    ]);
    res.json('Data Updated Successfully');
};

export const deleteData = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM progressboard where id = $1', [
        id
    ]);
    res.json(`Data ${id} deleted Successfully`);
};