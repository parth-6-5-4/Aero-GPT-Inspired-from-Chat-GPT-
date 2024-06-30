import { Request, Response } from 'express';

export const generateOpenAiResponseController =( req: Request, res: Response) => {
    try {
    const reqBody=req.body;
     const prompt=reqBody['prompt'];
     return res.json({"data" : prompt });
} catch (error) {
    console.log(error);
    res.status(500).json({'data' : error});
}}