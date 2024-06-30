"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOpenAiResponseController = void 0;
const generateOpenAiResponseController = (req, res) => {
    try {
        const reqBody = req.body;
        const prompt = reqBody['prompt'];
        return res.json({ "data": prompt });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ 'data': error });
    }
};
exports.generateOpenAiResponseController = generateOpenAiResponseController;
