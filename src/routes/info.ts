import express, { Request, Response } from 'express';

const info = express.Router();

info.post('/info', (req: Request, res: Response): void => {
    res.json({
        success: true,
        message: "HashChange here!",
    })
});

export default info;